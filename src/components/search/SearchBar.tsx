import { useState, useEffect } from "react";
import useSearchQueryStore from "../../stores/useSearchQueryStore";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useSearchQueryStore((state: any) => [
    state.searchQuery,
    state.setSearchQuery,
  ]);

  const getSearchQuery = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.searchQuery.value);
  };

  return (
    <div className="searchbar-container">
      <form className="searchbar" onSubmit={getSearchQuery}>
        <input
          type="text"
          name="searchQuery"
          placeholder="Type in a location..."
        ></input>
        <button type="submit">Search weather</button>
      </form>
    </div>
  );
};
