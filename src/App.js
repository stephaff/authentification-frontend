import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    fetch('/api/users/inscription', {
      method : 'POST',
      headers : { 'Content-Type ': 'application/json' },
      body : JSON.stringify({ email, password })
      }
    ).then(response => {
        response.json()
      })
      .then(json => {
        console.log(json)
      })
  }, [validate]);

  const inscription = () => {
    console.log(email)
    setValidate(!validate)
  }

  return (
    <Container sx={{display : 'flex', alignItems : 'center', minHeight : '100vh'}}>
    <Box 
      sx={{
        width : "300px",
        margin : "0 auto",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center"
      }}
    >
      <Typography
        variant='h4'
        color='primary'
      >
        Inscription
      </Typography>
      <TextField
        onChange={ e => setEmail(e.target.value)}
        variant='outlined'
        label='email'
        fullWidth
        size='small'
        sx={{
          marginTop : '1rem'
        }}
      />
      <TextField
        onChange={ e => setPassword(e.target.value)}
        type='password'
        variant='outlined'
        label='password'
        fullWidth
        size='small'
        sx={{
          marginTop : '1rem'
        }}
      />
      <Button
        onClick={ inscription }
        variant='contained'
        sx={{
          marginTop : '1rem'
        }}
      >
        valider
      </Button>
    </Box>
    </Container>
  );
}

export default App;
