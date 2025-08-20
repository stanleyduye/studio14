import {
  Box,
  Checkbox,
  CheckboxGroup,
  Fieldset,
  Flex,
  For,
  Menu,
  Portal,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiFilter } from "react-icons/bi";

import {
  categories,
  documentTypes,
  foundationPrinciples,
} from "@/constants/data";

interface DestopFilterProps {
  handlePrincipleChange: (values: string[]) => void;
  handleTypeChange: (values: string[]) => void;
  selectedTags: string[];
  selectedTypes: string[];
}

const DesktopFilter = ({
  handlePrincipleChange,
  handleTypeChange,
  selectedTags,
  selectedTypes,
}: DestopFilterProps) => {
  return (
    <Box width={{ base: "100%", md: "250px" }} flexShrink={0}>
      <Text mx={5} fontSize={16} fontWeight={700} color={"#3f3f3f"}>
        Filters
      </Text>
      <Separator my={5} borderColor={"#F2F2F2"} />
      <VStack px={5} pt={3} align="start">
        <Fieldset.Root width="100%">
          <CheckboxGroup
            mb={7}
            value={selectedTags}
            onValueChange={handlePrincipleChange}
          >
            <Fieldset.Legend
              mb={6}
              fontSize={16}
              fontWeight={700}
              color={"#3f3f3f"}
            >
              Key Foundational Principles
            </Fieldset.Legend>
            <Fieldset.Content>
              <For each={foundationPrinciples}>
                {({ value }) => (
                  <Checkbox.Root key={value} size={"sm"} value={value} mb={2}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontSize={16} color={"#3f3f3f"}>
                      {value}
                    </Checkbox.Label>
                  </Checkbox.Root>
                )}
              </For>
            </Fieldset.Content>
          </CheckboxGroup>
          <CheckboxGroup
            mb={7}
            value={selectedTypes}
            onValueChange={handleTypeChange}
          >
            <Fieldset.Legend
              mb={6}
              fontSize={16}
              fontWeight={700}
              color={"#3f3f3f"}
            >
              Document type
            </Fieldset.Legend>
            <Fieldset.Content>
              <For each={documentTypes}>
                {({ value }) => (
                  <Checkbox.Root key={value} size={"sm"} value={value} mb={2}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontSize={16} color={"#3f3f3f"}>
                      {value}
                    </Checkbox.Label>
                  </Checkbox.Root>
                )}
              </For>
            </Fieldset.Content>
          </CheckboxGroup>
          <CheckboxGroup mb={7}>
            <Fieldset.Legend
              mb={6}
              fontSize={16}
              fontWeight={700}
              color={"#3f3f3f"}
            >
              Categories
            </Fieldset.Legend>
            <Fieldset.Content>
              <For each={categories}>
                {({ value }) => (
                  <Checkbox.Root key={value} size={"sm"} value={value} mb={2}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label fontSize={16} color={"#3f3f3f"}>
                      {value}
                    </Checkbox.Label>
                  </Checkbox.Root>
                )}
              </For>
            </Fieldset.Content>
          </CheckboxGroup>
        </Fieldset.Root>
      </VStack>
    </Box>
  );
};

interface MobileFilterProps {
  selectedTags: string[];
  selectedTypes: string[];
  onPrincipleChange: (values: string[]) => void;
  onTypeChange: (values: string[]) => void;
}

const MobileFilter = ({
  selectedTags,
  selectedTypes,
  onPrincipleChange,
  onTypeChange,
}: MobileFilterProps) => {
  const handlePrincipleToggle = (value: string) => {
    const newValues = selectedTags.includes(value)
      ? selectedTags.filter((v) => v !== value)
      : [...selectedTags, value];
    onPrincipleChange(newValues);
  };

  const handleTypeToggle = (value: string) => {
    const newValues = selectedTypes.includes(value)
      ? selectedTypes.filter((v) => v !== value)
      : [...selectedTypes, value];
    onTypeChange(newValues);
  };

  return (
    <Flex
      bg={"#f1f1f1"}
      align={"center"}
      justify={"center"}
      borderBottom={"1px solid #F2F2F2"}
      width={"100%"}
      height={"61px"}
    >
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger asChild>
          <Flex
            align={"center"}
            bg={"none"}
            outline={"none"}
            cursor={"pointer"}
            gap={1}
          >
            <BiFilter color="#000" size={28} />
            <Text fontWeight={500} fontSize={16} color={"#3F3F3F"}>
              Show Filters
            </Text>
          </Flex>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content maxHeight="70vh" overflowY="auto">
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel fontWeight={700} fontSize={16}>
                  Key Foundational Principles
                </Menu.ItemGroupLabel>
                {foundationPrinciples.map(({ value }) => (
                  <Menu.CheckboxItem
                    key={value}
                    value={value}
                    checked={selectedTags.includes(value)}
                    onSelect={() => handlePrincipleToggle(value)}
                  >
                    {value}
                    <Menu.ItemIndicator />
                  </Menu.CheckboxItem>
                ))}
              </Menu.ItemGroup>
              <Menu.Separator />
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel fontWeight={700} fontSize={16}>
                  Document type
                </Menu.ItemGroupLabel>
                {documentTypes.map(({ value }) => (
                  <Menu.CheckboxItem
                    key={value}
                    value={value}
                    checked={selectedTypes.includes(value)}
                    onSelect={() => handleTypeToggle(value)}
                  >
                    {value}
                    <Menu.ItemIndicator />
                  </Menu.CheckboxItem>
                ))}
              </Menu.ItemGroup>
              <Menu.Separator />
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel fontWeight={700} fontSize={16}>
                  Categories
                </Menu.ItemGroupLabel>
                {categories.map(({ value }) => (
                  <Menu.CheckboxItem
                    key={value}
                    value={value}
                    checked={false}
                    onSelect={() => {}}
                  >
                    {value}
                    <Menu.ItemIndicator />
                  </Menu.CheckboxItem>
                ))}
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

interface FilterProps {
  onFilterChange: (type: "tag" | "type", values: string[]) => void;
  selectedTags: string[];
  selectedTypes: string[];
}

function Filter({ onFilterChange, selectedTags, selectedTypes }: FilterProps) {
  const handlePrincipleChange = (values: string[]) => {
    onFilterChange("tag", values);
  };

  const handleTypeChange = (values: string[]) => {
    onFilterChange("type", values);
  };

  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <DesktopFilter
          handlePrincipleChange={handlePrincipleChange}
          handleTypeChange={handleTypeChange}
          selectedTags={selectedTags}
          selectedTypes={selectedTypes}
        />
      </Box>
      <Box display={{ base: "block", md: "none" }} width="100%">
        <MobileFilter
          selectedTags={selectedTags}
          selectedTypes={selectedTypes}
          onPrincipleChange={handlePrincipleChange}
          onTypeChange={handleTypeChange}
        />
      </Box>
    </>
  );
}

export default Filter;
