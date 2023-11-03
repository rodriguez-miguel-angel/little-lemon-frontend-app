import '../../App.css';
import './BookingPage.css';

import { useReducer, useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import BookingForm from './BookingForm';

import useScript from '../../hooks/useScript';
/*
version-01:
See <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script>.
import { fetchAPI, submitAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
*/
 
// create a function named updateTimes which will handle the state change
const updateTimes = (state, action) => { 
  const {payload} = action;
  let obj = state.find((o, i) => {
    if (o.availableTime === payload.bookingTime) {
      state[i] = { ...state[i], selected: true };
      return true;
    }
  });
  console.log("obj: ", obj);
  return state; 
}

const bookingTimeReducer = (state, action) => {
  console.log("state:",state)
  const {type, payload} = action;
  console.log("type: ", type);
  console.log("payload: ", payload);
  switch(type) {
    case '':
      return state;
    case "DATE_INPUT":
      //  For now, the function can return the same available times regardless of the date.
      return state;
    case "FORM_INPUT":
      return updateTimes(state, action);
    default:
      return state;
    }
}

const BookingPage = () => {

  useScript();

 
  useEffect(() => {
    /*
    version-02 [fetchAPI. submitAPI]:
    fetchData();
    */
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
      .then((response) => response.json())
      .then((jsonData) => console.log(jsonData))
      .catch((error) => console.log(error));
  };
  //useEffect(() => {
    // const response = fetchAPI(new Date());
    // const data = response.json();
    // console.log(data); 
    
    // const {fetchAPI, submitAPI} = window.fetch;

    // const response = fetchAPI(new Date());
    // const data = response.json();
    // console.log(data); 
    // const response = fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
    // {
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   }})
    //     .catch((error) => console.log(error));
    // const {fetchAPI, submitAPI} = response;
 // });

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookingsHandler = async (bookingDate) => {
    setIsLoading(true);
    // const response = await fetchAPI(bookingDate);
    // const data = await response.json();
    // console.log(data); 
  }
  /*
  version-01[exercise-03-02]:
  const initialState = [
    { id: 1, availableTime: "17:00", selected: false }, { id: 2, availableTime: "18:00", selected: false },
    { id: 3, availableTime: "19:00", selected: false }, { id: 4, availableTime: "20:00", selected: false },
    { id: 5, availableTime: "21:00", selected: false }, { id: 6, availableTime: "22:00", selected: false }];
  */
 const initializeTimes = () => [
  { id: 1, availableTime: "17:00", selected: false }, { id: 2, availableTime: "18:00", selected: false },
  { id: 3, availableTime: "19:00", selected: false }, { id: 4, availableTime: "20:00", selected: false },
  { id: 5, availableTime: "21:00", selected: false }, { id: 6, availableTime: "22:00", selected: false }];

  const [availableTimes, dispatch] = useReducer(bookingTimeReducer, [], initializeTimes);

  const submitForm = (e) => {
    console.log(e);
    fetchBookingsHandler(new Date());
  }

  return (
    <>
     <Header/>
      <main className='BookingPage'>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </main>
      <Footer/>
    </>
  );
}

export default BookingPage;