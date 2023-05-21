import React, { Component } from 'react'
import { Box, Grid, Paper, styled, FormControl } from '@mui/material';
import { TextField } from '../../atoms/TextField/TextField';
import { Checkbox } from '../../atoms/CheckBox/CheckBox';
import SignUp from "../../../assets/images/SignUp.jpg";
import "../../../assets/css/signup.css";
export default class Login extends Component {
  render() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    const checkboxLabel = {msg: 'Remember Me'};

    return (
      <> 
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <img src={SignUp} />
        </Grid>
        <Grid item xs={8}>
          <Item className='auth-title'>
            Sign Up
            <p className='auth-subtitle'>Please enter your login credentials</p>
            <div >
            <FormControl className='auth-form'>
              <label>Email</label>
              <TextField className='field' type='email' placeholder='abc@gmail.com'/>
            </FormControl>
            <FormControl className='auth-form'>
              <label>Password</label>
              <TextField className='field' type='text' placeholder='********'/>
            </FormControl>
            </div>
            <FormControl className='auth-form'>
            <Checkbox {...checkboxLabel} itemType='checkbox'/>Remember Me
            </FormControl>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  </>
    )
  }
}
