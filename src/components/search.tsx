import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useDebouncedCallback } from "use-debounce";

interface SearchResourcesProps {
  onSearch: (query: string) => void;
}

function SearchResources({ onSearch }: SearchResourcesProps) {
  const debouncedSearch = useDebouncedCallback(
    (query: string) => onSearch(query),
    300
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  return (
    <InputGroup startElement={<LuSearch />} mt={10}>
      <Input
        borderRadius={10}
        border={{ base: "none", md: "1px solid #a1a1a1" }}
        bg={"white"}
        color={"#2C3237"}
        maxWidth={"853px"}
        width={{ base: "100%", md: "70vw" }}
        placeholder="Search by title or keyword"
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default SearchResources;
