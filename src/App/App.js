import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import { getAllReservations } from '../apiCalls.js'
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
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
