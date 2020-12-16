import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Reservations from './Reservations'


describe('Reservations', () => {

  it('should render correctly', () => {
    render(
      <Reservations reservations={[ 
      {
      name:"Bryce",
      date:"12/12",
      time:"7:00",
      number:"5",
      id:"22",
      key:'22',
      }
    ]}
      
      />
    )
    const name = screen.getByText("Bryce")
    const number = screen.getByText("Number of Guests: 5")

    expect(name).toBeInTheDocument()
    expect(number).toBeInTheDocument()
  })

})