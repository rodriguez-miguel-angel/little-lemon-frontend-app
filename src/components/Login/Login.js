import '../../App.css';
import './Login.css';

import Header from '../Header';
import Footer from '../Footer';

import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';


function Login() {

  /*
  See <https://formik.org/docs/examples/instant-feedback>.
  See <https://formik.org/docs/examples/async-submission>.
  */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(values.email);
      // submit("https://localhost:3000/login", values)
      formik.resetForm()
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      // See <https://stackoverflow.com/questions/55451304/formik-yup-password-strength-validation-with-react>.
      // See <https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik>.
      password: Yup.string()
          .min(8, 'Must be at least 8 characters.').max(12, 'Must be at most 12 characters.')
          .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,'Must contain at least one uppercase, one lowercase, one number, and one special character.')
          .required('Required'),
    }),
  });

  return (
    <>
      <Header/>
      <main className='Login'>
      <VStack w="70%" p={32} alignItems="flex-start">
        <Box display="grid" rounded="md" w="100%">
          <Heading className='display-title'>Little Lemon</Heading>
          <Heading className='subtitle'>Chicago</Heading>
        </Box>
        <Box p={6} rounded="md" w="100%">
          {/*
          See <https://formik.org/docs/tutorial#leveraging-react-context>.
          */}
          <Heading className='section-title'>Login Form</Heading>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type='email'
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>


            <FormControl isInvalid={!!formik.touched.password && formik.errors.password}>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>


              <Button type="submit" className='button' width="full">Login</Button>
              
            </VStack>
          </form>
        </Box>
      </VStack>
      </main>
      <Footer/>
    </>
  );
}

export default Login;