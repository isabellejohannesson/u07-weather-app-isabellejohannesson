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
      <section className="searchbar-container">
        <form className="searchbar" onSubmit={getSearchQuery}>
          <input
            type="text"
            name="searchQuery"
            placeholder="Type in a location..."
            ref={inputRef}
          ></input>
          <button type="submit">Search weather</button>
          <button type="button" onClick={resetSearchQuery}>
            Clear search
          </button>
        </form>
      </section>
    </>
  );
};
