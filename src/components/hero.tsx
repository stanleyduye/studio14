import { useSearchContext } from "@/context/search";
import { Flex, Text, VStack } from "@chakra-ui/react";
import SearchResources from "./search";

interface Props {
  title: string;
}

function HeroSection({ title }: Props) {
  const { setQuery } = useSearchContext();

  return (
    <Flex
      bg={"#fafafa"}
      width={"100vw"}
      align={"center"}
      justify={"center"}
      px={{ base: 4, md: 8 }}
    >
      <VStack py={{ base: 10, md: 20 }}>
        <Text
          fontWeight={700}
          fontSize={{ base: 40, md: 52 }}
          color={"#2C3237"}
        >
          {title}
        </Text>
        <Text
          fontWeight={400}
          fontSize={16}
          color={"#2C3237"}
          maxW={"60ch"}
          textAlign={"center"}
        >
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </Text>
        <SearchResources onSearch={setQuery} />
      </VStack>
    </Flex>
  );
}

export default HeroSection;
