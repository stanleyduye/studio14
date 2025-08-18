import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import logo from "../assets/Asset 2 1.png";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

function Navbar() {
  return (
    <Box width={"100vw"} bg={"white"} shadow={"sm"}>
      <Flex
        as={"nav"}
        align={"center"}
        justify={"space-between"}
        color={"black"}
        maxWidth={"1280px"}
        height={"74px"}
        px={{ base: 4, md: 8 }}
        mx={"auto"}
      >
        <HStack gap={16}>
          <Flex gap={4}>
            <Image src={logo} width={"36px"} height={"36px"} />
            <Text fontWeight={600} fontSize={23} color={"#404040"}>
              LOGO
            </Text>
          </Flex>
          <HStack gap={10} lgDown={{ display: "none" }}>
            <NavLink to={"/"}>
              <Text fontSize={14} fontWeight={600}>
                Dashboard
              </Text>
            </NavLink>
            <NavLink to={"/resources"}>
              <Text fontSize={14} fontWeight={600}>
                Resources
              </Text>
            </NavLink>
            <NavLink to={"/toolkit"}>
              <Text fontSize={14} fontWeight={600}>
                Toolkit
              </Text>
            </NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Switch.Root>
            <Switch.HiddenInput />
            <Switch.Control bg={"#314EF9"} color={"white"} />

            <Switch.Label
              fontWeight={600}
              fontSize={14}
              mdDown={{ display: "none" }}
            >
              Switch to Employee
            </Switch.Label>
          </Switch.Root>
          <Box
            border={"1px solid"}
            borderColor={"gray.200"}
            width={"1px"}
            height={"24px"}
            mx={6}
            mdDown={{ mx: 4 }}
          />
          <Flex align={"center"} gap={3}>
            <Avatar.Root
              backgroundColor={"#17E4A1"}
              overflow={"hidden"}
              width={33}
              height={33}
            >
              <Avatar.Fallback
                name="Jonathan A"
                color="black"
                fontWeight={800}
                fontSize={12}
              />
            </Avatar.Root>
            <Flex align={"center "} gap={1} mdDown={{ display: "none" }}>
              <Text fontSize={16} fontWeight={600} color={"#525252"}>
                Jonathan
              </Text>
              <BiChevronDown />
            </Flex>
            <Box display={{ base: "block", lg: "none" }}>
              <MdMenu color="#3c3c3c" size={26} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
