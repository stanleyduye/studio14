import {
  Avatar,
  Box,
  CloseButton,
  Drawer,
  Flex,
  HStack,
  Image,
  Portal,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../assets/Asset 2 1.png";

const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink to={to} end>
    {({ isActive }) => (
      <Flex position={"relative"} gap={1} direction={"column"}>
        <Text
          fontSize="14px"
          fontWeight={600}
          color={isActive ? "#314EF9" : "#2C3237"}
          px={4}
        >
          {children}
        </Text>
        {isActive && (
          <Box
            position={"absolute"}
            bottom={-7}
            w={"100%"}
            h={"3px"}
            bg={"#314EF9"}
          />
        )}
      </Flex>
    )}
  </NavLink>
);

function Navbar() {
  return (
    <Box
      width={"100vw"}
      bg={"white"}
      boxShadow="0px 4px 20px 0px #0000000F;
"
      position="sticky"
      top="0"
      zIndex="1000"
    >
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
          <Flex gap={4} align={"center"}>
            <Image src={logo} width={"36px"} height={"36px"} />
            <Text
              fontWeight={600}
              fontSize={{ base: 18, md: 23 }}
              color={"#404040"}
            >
              LOGO
            </Text>
          </Flex>
          <HStack gap={5} lgDown={{ display: "none" }}>
            <NavItem to={"/"}>Dashboard</NavItem>
            <NavItem to={"/resources"}>Resources</NavItem>
            <NavItem to={"/toolkit"}>Toolkit</NavItem>
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
                name="Stanley Duye"
                color="black"
                fontWeight={800}
                fontSize={12}
              />
            </Avatar.Root>
            <Flex align={"center "} gap={1} mdDown={{ display: "none" }}>
              <Text fontSize={16} fontWeight={600} color={"#525252"}>
                Stanley
              </Text>
              <BiChevronDown />
            </Flex>
            <Drawer.Root>
              <Drawer.Trigger asChild>
                <Box display={{ base: "block", lg: "none" }}>
                  <MdMenu color="#3c3c3c" size={36} />
                </Box>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content bg={"white"}>
                    <VStack gap={10} py={10}>
                      <NavItem to={"/"}>Dashboard</NavItem>
                      <NavItem to={"/resources"}>Resources</NavItem>
                      <NavItem to={"/toolkit"}>Toolkit</NavItem>
                    </VStack>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="md" color={"#3c3c3c"} />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
