

export const getAllReservations = () => {
  return(
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
  )
}

export const postNewReservation = (newRes) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRes)
    })
    .then(response => response.json())
}

export const deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
}