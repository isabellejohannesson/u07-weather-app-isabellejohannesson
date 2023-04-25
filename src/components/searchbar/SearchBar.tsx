/* import { useState, useEffect } from "react";

export const SearchBar = async () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<any>(null);
  const [results, setResults] = useState([]);

  const appKey = "e02f5c3118f543f68a6213438231704";

  try {
    const url =
      `https://api.weatherapi.com/v1/forecast.json?key=` +
      appKey +
      `&q=` +
      searchQuery +
      `&days=3&aqi=no&alerts=yes`;

    const response = await fetch(url);

    const result = await response.json();
    console.log(result);

    setSearchQuery([result]);
  } catch (error) {
    setError(error);
  } finally {
    setIsSearching(false);
  }

  useEffect(() => {
    setIsSearching(true);
    setSearchQuery();
  }, [searchQuery]);
  return (
    <>
      <form>
        <input placeholder="Type in a location..."></input>
      </form>
    </>
  );
};
 */
