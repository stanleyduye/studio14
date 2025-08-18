import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

function HeroSection() {
  return (
    <Flex bg={"#fafafa"} width={"100vw"} align={"center"} justify={"center"}>
      <HStack>
        <Text fontWeight={700} fontSize={52} color={"#2C3237"}>
          Resources
        </Text>
      </HStack>
    </Flex>
  );
}

export default HeroSection;
