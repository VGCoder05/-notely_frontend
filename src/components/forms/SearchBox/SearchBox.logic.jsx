import { useState, useCallback, useEffect } from "react";

export const useSearchBox = (data, debounceMs = 300) => {
  const [searchTerm, setSearchTerm] = useState(""); // to track the value to be search
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [result, setResult] = useState(data);

  // To Sync "data" when data change anywhere
  useEffect(() => {
    setResult(data);
  }, [data]);

  const handleSearch = useCallback(
    (query) => {
      // Search is handled by SearchModal (⌘K)
      setResult(
        data.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      );
      // console.log(result)
    },
    [data]
  );

  const handleChange = useCallback(
    (e) => {
      // To set "searchTerm" value to value which is typed in search box
      const value = e.target.value;
      setSearchTerm(value);

      // Clear existing timeout
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Set new timeout for debounced search
      const timeout = setTimeout(() => {
        if (handleSearch) {
          handleSearch(value);
        }
      }, debounceMs);

      // To set "setTimeout" Id to "debounceTimeout", so that we can clear previous "setTimeout" before creating a new "setTimeout"
      setDebounceTimeout(timeout);
    },
    [debounceTimeout, handleSearch, debounceMs]
  );

  const handleClear = useCallback(() => {
    setSearchTerm("");
    if (handleSearch) {
      handleSearch("");
    }
  }, [handleSearch]);

  return {
    searchTerm,
    handleChange,
    handleClear,
    result,
  };
};
