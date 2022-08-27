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
} from "@chakra-ui/react";
import { TbRocket } from "react-icons/tb";
import AddProject from "./AddProjectModal";
import { useDisclosure } from "@chakra-ui/react";

export default function Card() {
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
              Projects
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
            <AddProject isOpen={isOpen} onClose={onClose} />
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={"10"}>
          <List spacing={6}>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 1
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 2
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 3{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              All Projects
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 3{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 3{" "}
            </ListItem>
            <ListItem>
              <ListIcon as={TbRocket} color="green.400" />
              Project 3{" "}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
