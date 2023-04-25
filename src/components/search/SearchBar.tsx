import useSearchQueryStore from "../../stores/useSearchQueryStore";

export const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <form className="searchbar">
        <input placeholder="Type in a location..."></input>
        <button type="submit">Search weather</button>
      </form>
    </div>
  );
};
