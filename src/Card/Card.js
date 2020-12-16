import React, { Component } from 'react';
import './Card.css';

const Card = ({name, date, time, number, id}) => {
  return(
    <section className="card">
      <h2>{name}</h2>
      <p>On {date} at {time}</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel Reservation</button>
    </section>
  )
}


export default Card;