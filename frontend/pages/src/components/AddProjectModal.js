import { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";

export default function AddProject(props) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Project name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Project Fields</FormLabel>
              <Textarea placeholder="Enter Player Name, Email & Points " />
            </FormControl>
          </ModalBody>

          <ModalFooter mr={"24"}>
            <Button colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={props?.onClose}>Cancel</Button>
          </ModalFooter>

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
        </ModalContent>
      </Modal>
    </>
  );
}
