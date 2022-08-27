import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Stack,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function PlayerSidebar(props) {
  const firstField = useRef();

  return (
    <>
      <Drawer {...props} placement="right" initialFocusRef={firstField}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Add Player Points</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Search for Player</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter player name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Player Points</FormLabel>
                <InputGroup>
                  <InputLeftAddon>Points</InputLeftAddon>
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter player points"
                  />
                </InputGroup>
              </Box>
              <Flex align="center" mt={1}>
                <Divider />
                <Text padding="2">OR</Text>
                <Divider />
              </Flex>

              <Button
                borderRadius={"full"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 15%)"}
                colorScheme={"teal"}
              >
                Upload CSV File{" "}
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={props?.onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
