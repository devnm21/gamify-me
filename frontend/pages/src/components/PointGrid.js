import { SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  useColorModeValue,
  Thead,
  TableContainer,
  Table,
  Th,
  Tr,
  Tbody,
  Text,
  Td,
  Flex,
  Button,
  Link,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

export default function PointGrid() {
  const data = [
    {
      name: "Monkey D Luffy",
      points: "3.5",
      position: "1",
    },
    {
      name: "Ronoroa Zoro",
      points: "1.5",
      position: "2 ",
    },

    {
      name: "Vinsmoke Sanji",
      points: "1.1",
      position: " 3",
    },

    {
      name: "Nico Robin",
      points: "930",
      position: "4 ",
    },

    {
      name: "God Usopp",
      points: "500",
      position: " 5",
    },

    {
      name: "Franky",
      points: "300",
      position: "6",
    },
  ];

  return (
    <Box
      fontFamily={"montserrat"}
      maxW={"7xl"}
      boxShadow={"2xl"}
      rounded={"sm"}
      overflow={"hidden"}
    >
      <Stack
        textAlign={"center"}
        p={6}
        color={useColorModeValue("gray.800", "white")}
        align={"center"}
        border={"teal solid 1px"}
      >
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <SettingsIcon />
          <Spacer />
          <Text fontSize={"3xl"} fontWeight={600}>
            Leaderboard
          </Text>
          <Spacer />
          <Button
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
            Update{" "}
          </Button>
          size={"sm"}
          boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
          <BiLinkExternal />
        </Stack>
      </Stack>

      <TableContainer>
        <Table variant="simple" colorScheme="teal" border={"teal solid 1px"}>
          <Thead bg={useColorModeValue("gray.50", "gray.900")}>
            <Tr>
              <Th>Name </Th>
              <Th>Points</Th>

              <Th>Position </Th>
            </Tr>
          </Thead>
          <Tbody bg={useColorModeValue("gray.50", "gray.900")}>
            {data.map((data) => (
              <Tr key={data.name}>
                <Th>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Text sx={{ fontWeight: 500, fontSize: "0.875rem" }}>
                      {data.name}
                    </Text>
                    <Text variant={"caption"}>{data.points}</Text>
                  </Box>
                </Th>
                <Td>{data.points}</Td>
                <Td>{data.position}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
