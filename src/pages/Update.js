import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as maintenanceRequestService from '../service/AptMaintenanceRequestService';

import {useNavigate } from "react-router-dom";

const theme = createTheme();

export const Update = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [aptNumber, setAptNumber] = useState('')
  const [createAt, setCreateAt] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=> {
    maintenanceRequestService.getById(id)
    .then(response => {
       const user = response.data;
       setFirstName(user.firstName);
       setLastName(user.lastName);
       setEmail(user.email);
       setAptNumber(user.setAptNumber);
       setCreateAt(user.setCreateAt);
       setDescription(user.description);
    })
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const maintenanceRequest = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email:data.get('email'),
      aptNumber: data.get('aptNumber'),
      createAt: data.get('createAt'),
      description: data.get('description')
    };

    maintenanceRequestService.updateMaintenanceRequest(id,maintenanceRequest)
    .then(response => {
      navigate("/");
    })

  };

    return(
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Update
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={firstName}
                  onChange= {(e) => setFirstName(e.target.value)}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  value={lastName}
                  onChange= {(e) => setLastName(e.target.value)}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange= {(e) => setEmail(e.target.value)}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="aptNumber"
                  value={aptNumber}
                  onChange= {(e) => setAptNumber(e.target.value)}
                  label="Apt Number"
                  name="Apt Number"
                  autoComplete="Apt Number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="createAt"
                  value={createAt}
                  onChange= {(e) => setCreateAt(e.target.value)}
                  label="Create At"
                  name="Create At"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  value={description}
                  onChange= {(e) => setDescription(e.target.value)}
                  label="Description"
                  name="Description"
                  autoComplete="Description"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Save
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
  };