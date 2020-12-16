import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newRes = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      id: Date.now()
    }

    this.props.addReservation(newRes)

    this.clearInputs()
  }

  clearInputs() {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }


  render() {
    return(
      <form>
        <input name='name' value={this.state.name} placeholder="Name" onChange={this.handleChange}></input>
        <input name='date' value={this.state.date} placeholder="Date" onChange={this.handleChange}></input>
        <input name='time' value={this.state.time} placeholder="Time" onChange={this.handleChange}></input>
        <input name='number' value={this.state.number} placeholder="Number of Guests" onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    
    )
  }
}

export default Form;