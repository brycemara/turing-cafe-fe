import React from 'react';import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import ReactDOM from 'react-dom'
import App from './App';
import { getAllReservations } from '../apiCalls';
jest.mock('../apiCalls.js')


describe('App', () => {

  beforeEach(() => {
    getAllReservations.mockResolvedValueOnce([
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
        },
        {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
        }
    ])
  })

  it('should render correctly', async () => {
    render(
      <App />
    )

    expect(screen.getByText("Turing Cafe Reservations"))

    await waitFor(() => {
      expect(screen.getByText("Christie")).toBeInTheDocument()
      expect(screen.getByText("Number of Guests: 2")).toBeInTheDocument()
    })
  })

  it('user should be able to fill out form and submit new reservation', async () => {
    render(
      <App />
    )
    const nameInput = screen.getByPlaceholderText("Name")
    const dateInput = screen.getByPlaceholderText("Date")
    const timeInput = screen.getByPlaceholderText("Time")
    const numberInput = screen.getByPlaceholderText("Number of Guests")
    const submitButton = screen.getByText("Make Reservation")

    userEvent.type(nameInput, "Bryce")
    userEvent.type(dateInput, "12/12")
    userEvent.type(timeInput, "7:00")
    userEvent.type(numberInput, "7")
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("Bryce")).toBeInTheDocument()
      expect(screen.getByText("Number of Guests: 7")).toBeInTheDocument()
    })

  })
})

