import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import { getAllReservations, postNewReservation, deleteReservation } from '../apiCalls.js'
import Reservations from '../Reservations/Reservations';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllReservations()
    .then(data => this.setState({reservations: data}))
    .catch(error => this.setState({error: error}))
  }

  addReservation = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes]})
    postNewReservation(newRes)
  }

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({ reservations: filteredReservations})
    deleteReservation(id)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation} />
        </div>
      </div>
    )
  }
}

export default App;
