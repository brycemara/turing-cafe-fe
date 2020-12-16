import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props)
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

  handleSubmit = (event, props) => {
    event.preventDefault()

    const newRes = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number),
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