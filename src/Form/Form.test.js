import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Form from './Form'
jest.mock('../apiCalls.js')

describe('Form', () => {

  it('should render on page load', () => {
    render(
      <Form addReservation={jest.fn()} />
    )

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
  })

  it('should be able to submit a new reservation', () => {
    const mockAddReservation = jest.fn()
    render(
      <Form addReservation={mockAddReservation} />
    )

    userEvent.click(screen.getByText("Make Reservation"))

    expect(mockAddReservation).toBeCalled()
  })

  it('should be able to input data to form', async () => {
    render(
      <Form addReservation={jest.fn()} />
    )

    const nameInput = await waitFor(() => screen.getByPlaceholderText("Name"))

    userEvent.type(nameInput, "Bryce")

    expect(nameInput).toHaveValue("Bryce")
  })
  
})