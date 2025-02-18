import "./SearchBar.css";
import { useRef } from "react";
import useSearchQueryStore from "../../stores/useSearchQueryStore";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useSearchQueryStore((state: any) => [
    state?.searchQuery ?? "",
    state?.setSearchQuery ?? (() => {}),
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const getSearchQuery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const query = form.searchQuery?.value?.trim(); // Kolla att fältet finns och trimma mellanslag

    if (query) {
      setSearchQuery(query);
    }
  };

  const resetSearchQuery = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <section className="p-4 flex flex-col justify-center">
      <form onSubmit={getSearchQuery} className="p-6 self-center">
        <input
          type="text"
          name="searchQuery"
          placeholder="Enter city name..."
          ref={inputRef}
          className="p-2 border-solid border-2 rounded-full w-full bg-stone-300"
        />
        <div className="p-4 flex flex-row-reverse justify-between">
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
          >
            Search
          </button>
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={resetSearchQuery}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};
