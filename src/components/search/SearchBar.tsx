import "./SearchBar.css";
import { useState, useEffect, useRef } from "react";
import useSearchQueryStore from "../../stores/useSearchQueryStore";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useSearchQueryStore((state: any) => [
    state.searchQuery,
    state.setSearchQuery,
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const getSearchQuery = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.searchQuery.value);
  };

  const resetSearchQuery = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <section className="p-4 flex flex-col justify-center">
        <form onSubmit={getSearchQuery} className="p-6 max-w-sm self-center">
          <input
            type="text"
            name="searchQuery"
            placeholder="Enter city name..."
            ref={inputRef}
            className="p-2 border-solid border-2 rounded-full w-full bg-stone-300"
          ></input>
          <div className="p-4 flex flex-row-reverse justify-between">
            <button type="submit">Search weather</button>
            <button type="button" onClick={resetSearchQuery}>
              Clear search
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
