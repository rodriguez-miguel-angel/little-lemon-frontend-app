import '../../App.css';
import './BookingPage.css';

import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Grid,
} from "@chakra-ui/react";
import * as Yup from 'yup';

import BookingSlot from './BookingSlot';

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

  /*
  version-00:
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [seating, setSeating] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comment, setComment] = useState("");

  version-01 [exercise-03-01]:
  const [availableTimes, setStatefulArray ] = useState([
      { id: 1, availableTime: "17:00", selected: false }, { id: 2, availableTime: "18:00", selected: false },
      { id: 3, availableTime: "19:00", selected: false }, { id: 4, availableTime: "20:00", selected: false },
      { id: 5, availableTime: "21:00", selected: false }, { id: 6, availableTime: "22:00", selected: false }]);

  */
 
  const today = new Date();
  const someday = new Date()
  someday.setDate(today.getDay() + 90);
  /*
  See <https://formik.org/docs/examples/instant-feedback>.
  See <https://formik.org/docs/examples/async-submission>.
  See <https://formik.org/docs/tutorial>.
  */

  const bookingDateChangeHandler = (e) => {
    console.log("e:", e);
    console.log("Form[bookingDate]:", formik.values.bookingDate)
    dispatch({type: 'DATE_INPUT', payload: formik.values});
  };

  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      bookingDate: "",
      bookingTime: "",
      numberOfGuests: "",
      seating: "",
      occasion: "",
      comment: "",
    },
    onSubmit: (values, actions) => {
      console.log("actions:", actions);
      console.log("values", values);
      // submit("https://localhost:3000/booking", values)
      /*
      version-01 [exercise-03-01]:
      props.submitForm(actions);
      */
      dispatch({type: "FORM_INPUT", payload: values});
      submitForm(actions);
      formik.resetForm();
  },
  validationSchema: Yup.object({
      bookingDate: Yup.date().nullable()
        .min(today, "Must be at least today.")
        .max(someday, "Must be at most 90 days from today.")
        .required("Required"),
      bookingTime: Yup.string().required("Required"),
      numberOfGuests: Yup.number().positive().min(2, 'Must be at least 2 guests.').max(20,'Must be at most 20 guests.').required('Required'),
      comment: Yup.string().min(25, 'Must be at least 25 characters'),
    }),
  });

  bookingDateChangeHandler();

  return (
    <main className='BookingForm'>
      <VStack w="70%" p={32}  alignItems="flex-start" >
        <Box display="grid" rounded="md" w="100%">
          <Heading className='display-title'>Little Lemon</Heading>
          <Heading className='subtitle'>Chicago</Heading>
        </Box>
        <Box display="grid" rounded="md" w="100%" gridGap={2} gridAutoFlow="row dense" pt={6}>
          {/*
          See <https://formik.org/docs/tutorial#leveraging-react-context>.
          */}
          <Heading className='section-title'>Reservation Form</Heading>
          <form className='reservationForm' onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl isInvalid={!!formik.touched.bookingDate && formik.errors.bookingDate}>
                <FormLabel className='highlight-text' htmlFor="bookingDate">Booking Date:</FormLabel>
                <Input
                  role='date-input'
                  id="bookingDate"
                  name="bookingDate"
                  type='date'
                  width={270}
                  /*
                  version-00:
                  onChange={formik.handleChange}
                  */
                  onChange={formik.handleChange}
                  value={formik.values.bookingDate}
                  {...formik.getFieldProps("bookingDate")}
                />
                <FormErrorMessage>{formik.errors.bookingDate}</FormErrorMessage>
              </FormControl>

              <Box >
                <FormControl isInvalid={!!formik.touched.bookingTime && formik.errors.bookingTime} >
                  <FormLabel className='highlight-text' htmlFor="bookingTime" m={0}>Booking Time:</FormLabel>
                  <Select icon={''} 
                    id="bookingTime" 
                    name="bookingTime"
                    onChange={formik.handleChange}
                    value={formik.values.bookingTime} 
                    {...formik.getFieldProps("bookingTime")}>
                  {
                  /* 
                  version-01 [exercise-03-01]:
                  Add available times based on the `availableTimes` data
                  availableTimes.map((availableTime) => (
                    <option
                    key={availableTime.id}
                    value={availableTime.availableTime}
                    children={availableTime.availableTime}
                    />
                    ))
                  }
                  */
                  }
                  <BookingSlot availableTimes={availableTimes}/>
                  </Select>
                  <FormErrorMessage>{formik.errors.bookingTime}</FormErrorMessage>
                </FormControl>

              </Box>

            <FormControl isInvalid={!!formik.touched.numberOfGuests && formik.errors.numberOfGuests}>
                <FormLabel className='highlight-text' htmlFor="numberOfGuests">Number Of Guests:</FormLabel>
                <Input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="number"
                  min={2}
                  max={20}
                  width={270}
                  {...formik.getFieldProps("numberOfGuests")}
                />
                <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
              </FormControl>

              <Grid gridTemplateRows="1fr" gridTemplateColumns="50% 50%" gridColumnGap={8} w={270} m={0} pt={6} pb={6} justifyContent={'center'}>
                <Grid gridColumn={1} justifySelf="left">
                  <FormControl>
                    <FormLabel className='highlight-text' htmlFor="seating">Seating:</FormLabel>
                    <Select icon={''} id="seating" name="seating" {...formik.getFieldProps("seating")}>
                    <option value=""></option>
                      <option value="birthday">Indoor</option>
                      <option value="anniversary">Outdoor</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid gridColumn={2} justifySelf="right">
                  <FormControl>
                    <FormLabel className='highlight-text' htmlFor="occasion">Occasion:</FormLabel>
                    <Select icon={''} id="occasion" name="occasion" {...formik.getFieldProps("occasion")}>
                    <option value=""></option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="graduation">Graduation</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>

                </Grid>
              </Grid>

              <FormControl isInvalid={!!formik.touched.comment && formik.errors.comment}>
                <FormLabel className='highlight-text' htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  {...formik.getFieldProps("comment")}
                  width={270}
                  height={60}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>


              <Button type="submit" className='button' width="full">{"Make Reservation"}</Button>

            </VStack>
          </form>
        </Box>
      </VStack>

      </main>
  );
}

export default BookingForm;