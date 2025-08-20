import type { FuseOptionKey } from "fuse.js";
import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";

interface SearchProps<T> {
  items: T[];
  keys: FuseOptionKey<T>[];
  onResults: (results: T[]) => void;
}

export const useSearch = <T>({ items, keys, onResults }: SearchProps<T>) => {
  const [query, setQuery] = useState("");

  keys = useMemo(
    () => keys || [],
    // eslint-disable-next-line
    []
  );

  const fuse = useMemo(() => {
    if (items && keys) {
      return new Fuse(items, {
        keys,
        threshold: 0,
        distance: 0,
      });
    }
    return null;
  }, [items, keys]);

  useEffect(() => {
    if (query && fuse) {
      const searchResults = fuse.search(query);
      onResults?.(searchResults.map((result) => result.item));
    } else {
      onResults?.(items);
    }
  }, [query, items, fuse, onResults]);

  return { setQuery };
};
