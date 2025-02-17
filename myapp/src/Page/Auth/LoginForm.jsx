import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'

const LoginForm = ({togglePanel}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target; // Corrected typo here: value
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login form", formData);
      };
  return (
    <div>
    <form className='space-y-3' onSubmit={handleSubmit}>
      <h1 className='text-lg font-bold text-center pb-8'>Login</h1> {/* Corrected className */}

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange} // Add onChange handler
        placeholder='enter your email...'
        />
      {/* Add Password Field */}
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder='enter your password...'
      />
        <div>
        <Grid item xs={12}>
            <Button fullWidth
            className='customeButton'
            type='submit'
            sx={{padding:"0.9rem"}}>
            Login
            </Button>
        </Grid>
        </div>
    </form>
    <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>don't have an account?</span>
        <Button onClick={togglePanel}>SignUp</Button>
    </div>
  </div>
  )
}

export default LoginForm
