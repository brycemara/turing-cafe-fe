import React from 'react';
import './Card.css';

const Card = ({name, date, time, number, id, deleteReservation}) => {
  return(
    <section className="card">
      <h2>{name}</h2>
      <p>On {date} at {time}</p>
      <p>Number of Guests: {number}</p>
      <button onClick={() => {deleteReservation(id)}}>Cancel Reservation</button>
    </section>
  )
}


export default Card;