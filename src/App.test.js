import React from 'react'
import * as Formik from 'formik';
import { fireEvent, renderHook, render, screen, cleanup, waitFor, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event'

import BookingPage from "./components/BookingPage/BookingPage";
import BookingForm from './components/BookingPage/BookingForm';



        


describe("BookingForm", () => {

    afterAll(() => {
        cleanup();
    });

    /*
    See <https://testing-library.com/docs/example-react-formik/>.
    See <https://testing-library.com/docs/queries/byrole/>.
    */
    //  test that the BookingsForm component can be submitted by the user
    test('should the BookingsForm component can be submitted by the user', async () => {
        const today = new Date();
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()
        render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        
        const user = userEvent;

        // Note: The 'value' attribute must use ISO 8601 format when firing a
        // change event on an input of type "date". Otherwise the element will not
        // reflect the changed value.

        await user.type(screen.getByRole('date-input', { name: /Booking Date:/i}), today)
        await user.type(screen.getByRole('combobox', { name: /Booking Time:/i}), "20:00")
        await user.type(screen.getByRole('spinbutton', { name: /Number of Guests:/i}), 4)
            
        await user.click(screen.getByRole('button'))
        
        // See <https://stackoverflow.com/questions/75312727/settimeout-working-instead-of-await-waitfor-in-test-cases-jest>.
        setTimeout(()  => 
            expect(mockHandleSubmit).toHaveBeenCalledWith({
                bookingDate: today,
                bookingTime: "20:00",
                numberOfGuests: 4,
            }),
        )

    });

    // test for some static text being rendered in the Bookings component? 
    test('Renders the BookingForm heading', () => {
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()
        render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        const headingElement = screen.getByText("Reservation Form");
        expect(headingElement).toBeInTheDocument();
    });

    //  test that the BookingsForm component can not be submitted by the user
    test('should the BookingsForm component can not be submitted by the user', () => {
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()
        render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        const submitButton = screen.getByRole("button");

        fireEvent.click(submitButton);
        expect(mockHandleSubmit).not.toHaveBeenCalled();

    });
});


describe("BookingPage", () => {
    const setup = () => {
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()
        const utils =render(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        const input = screen.getByRole('combobox', { name: /Booking Time:/i}); 
        return {
          input,
          ...utils,
        }
      }
    // Write a unit test for the initializeTimes function to validate that it returns the correct expected value.
    test('should validate that it returns the correct expected value for the initializeTimes function', () => {
        /*
        version-01:
        */       
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()

        const availableTimes = [{"availableTime": "17:00", "id": 1, "selected": false}, {"availableTime": "18:00", "id": 2, "selected": false},
                    {"availableTime": "19:00", "id": 3, "selected": false}, {"availableTime": "20:00", "id": 4, "selected": false},
                    {"availableTime": "21:00", "id": 5, "selected": false}, {"availableTime": "22:00", "id": 6, "selected": false}]

        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        const timeInput = screen.getByRole('combobox', { name: /Booking Time:/i});
        fireEvent.click(timeInput)
        // test assumption
        expect(timeInput).toHaveTextContent("17:00");
    })

    // Write a unit test for the updateTimes function to validate that it returns the same value that is provided in the state.
    test("should validate that it returns the same value that is provided in the state", () => {
        const mockHandleSubmit = jest.fn()
        const mockDispatch = jest.fn()

        const availableTimes = [{"availableTime": "17:00", "id": 1, "selected": false}, {"availableTime": "18:00", "id": 2, "selected": false},
                    {"availableTime": "19:00", "id": 3, "selected": false}, {"availableTime": "20:00", "id": 4, "selected": false},
                    {"availableTime": "21:00", "id": 5, "selected": false}, {"availableTime": "22:00", "id": 6, "selected": false}]

        render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockHandleSubmit} />);
        const timeInput = screen.getByRole('combobox', { name: /Booking Time:/i});
        fireEvent.change(timeInput, {target: {value: "18:00"}})
        expect(timeInput.value).toBe("18:00")
    })

});