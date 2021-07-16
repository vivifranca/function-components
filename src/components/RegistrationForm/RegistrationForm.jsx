import { Button, Input } from '@material-ui/core'
import React from 'react'

function RegistrationForm() {
  return (
    <form>
      <label>Name</label>
      <Input type='text' />

      <label>Last name</label>
      <Input type='text' />

      <label>ID</label>
      <Input type='text' />

      <label>Sales</label>
      <Input type='checkbox' />

      <label>Newsletter</label>
      <Input type='checkbox' />

      <Button type='submit' variant='contained' color='primary'>Save</Button>
    </form>
  )
}

export default RegistrationForm