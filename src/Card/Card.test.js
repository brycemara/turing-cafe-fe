import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import ReactDOM from 'react-dom'
import Card from './Card'


describe('Card', () => {

  it('should render correctly', () => {
    render(
      <Card 
      name="Bryce"
      date="12/12"
      time="7:00"
      number="5"
      id="22"
      key='22'
      />
    )
    const name = screen.getByText("Bryce")
    const number = screen.getByText("Number of Guests: 5")

    expect(name).toBeInTheDocument()
    expect(number).toBeInTheDocument()
  })

})

