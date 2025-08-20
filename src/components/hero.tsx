import { Flex, Input, InputGroup, Text, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

interface Props {
  title: string;
}

function HeroSection({ title }: Props) {
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
        <InputGroup startElement={<LuSearch />} mt={10}>
          <Input
            borderRadius={10}
            border={{ base: "none", md: "1px solid #a1a1a1" }}
            bg={"white"}
            color={"#2C3237"}
            maxWidth={"853px"}
            width={{ base: "100%", md: "70vw" }}
            placeholder="Search by title or keyword"
          />
        </InputGroup>
      </VStack>
    </Flex>
  );
}

export default HeroSection;
