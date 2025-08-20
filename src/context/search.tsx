import { cardData } from "@/constants/data";
import { useSearch } from "@/hooks/use-search";
import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface SearchContextType {
  setQuery: (query: string) => void;
  searchResults: typeof cardData;
  setSearchResults: (results: typeof cardData) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchResults, setSearchResults] = useState(cardData);
  const { setQuery } = useSearch({
    items: cardData,
    keys: ["title", "topic", "tag", "type"],
    onResults: setSearchResults,
  });
  return (
    <SearchContext.Provider
      value={{ setQuery, searchResults, setSearchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
