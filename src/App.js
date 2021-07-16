import { Container, Typography } from '@material-ui/core'
import React from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import 'fontsource-roboto'

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align="center">Registration Form</Typography>

      <RegistrationForm />
    </Container>
  )
}

export default App
