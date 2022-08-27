import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "./src/utils/firebase.utils";
import { createUser } from "./src/utils/firebase.utils";
import { Formik, Form } from "formik";
import { FcGoogle } from "react-icons/fc";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function Login() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const user = await signInWithGooglePopup();
    try {
      const res = createUser();
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // console.log({ user });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          swal("Cant create user!", "Incorrect Password!", "error");
          break;
        case "auth/user-not-found":
          swal(
            "Cant create user!",
            "No user associated with this email!",
            "error"
          );
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);
                setSubmitting(false);
              }, 1000);
            }}
            initialValues={{ email: "", password: "" }}
          >
            {({ isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={password}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      isLoading={isSubmitting}
                      loadingText={"Whispering to our servers"}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>

          <Flex align="center" mt={2}>
            <Divider />
            <Text padding="2">OR</Text>
            <Divider />
          </Flex>
          <Flex
            alignItems="center"
            justify={"center"}
            w={"100%"}
            height={"100%"}
          >
            <FcGoogle size={"40"} onClick={signInWithGooglePopup} />
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}
