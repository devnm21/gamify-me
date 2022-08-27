import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { TbRocket } from "react-icons/tb";
import AddProject from "./AddProjectModal";
import { useDisclosure } from "@chakra-ui/react";
import PlayerSidebar from "./AddPlayerSiderbar";

export default function PlayerListCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center py={"14"}>
      <Box
        border={"teal solid 1px"}
        fontFamily={"montserrat"}
        maxW={"330px"}
        w={"xl"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
        h={{ md: "l" }}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"} fontWeight={600}>
              Edit Players
            </Text>
            <Spacer />
            <Button
              onClick={onOpen}
              size={"md"}
              borderRadius={"full"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              {" "}
              +{" "}
            </Button>
            <PlayerSidebar isOpen={isOpen} onClose={onClose} />
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={"10"}>
          <List spacing={6}>
            <HStack>
              <Box>
                <ListItem>
                  <ListIcon as={TbRocket} color="green.400" />
                  Dev NM
                </ListItem>
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  size={"sm"}
                  borderRadius={"full"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <ListItem>
                  <ListIcon as={TbRocket} color="green.400" />
                  DuoLearn
                </ListItem>
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  size={"sm"}
                  borderRadius={"full"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <ListItem>
                  <ListIcon as={TbRocket} color="green.400" />
                  Shrithan{" "}
                </ListItem>
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  size={"sm"}
                  borderRadius={"full"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <ListItem>
                  <ListIcon as={TbRocket} color="green.400" />
                  Pavan Kumar
                </ListItem>
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  size={"sm"}
                  borderRadius={"full"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  {" "}
                  +{" "}
                </Button>
              </Box>
            </HStack>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
