import React, { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

function RegistrationForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <form onSubmit={event => {
      event.preventDefault()
      console.log(name)
      console.log(lastName)
    }}>
      <TextField
        id='name'
        value={name}
        onChange={event => {
          setName(event.target.value)
        }}
        label='name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='lastName'
        value={lastName}
        onChange={event => {
          setLastName(event.target.value)
        }}
        label='Last name'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='id'
        label='ID'
        variant='outlined'
        fullWidth
        margin='normal'
      />

      <FormControlLabel
        label='Sales'
        control={<Switch defaultChecked name="sales" color='primary' />}
      />

      <FormControlLabel
        label='Newsletter'
        control={<Switch defaultChecked name="newsletter" color='primary' />}
      />

      <Button type='submit' variant='contained' color='primary'>Save</Button>
    </form>
  )
}

export default RegistrationForm