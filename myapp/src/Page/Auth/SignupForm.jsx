import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

const SignupForm = ({togglePanel}) => {

    const [formData, setFormData] = useState({
        fullName:"",
        email: "",
        password: "",
        role:""
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
      <h1 className='text-lg font-bold text-center pb-8'>Register</h1> {/* Corrected className */}
      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange} // Add onChange handler
        placeholder='enter your full name...'
        />  
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
       <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          label="Role"
          name="role"
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>User</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
        </Select>
      </FormControl>
        <div>
        <Grid item xs={12}>
            <Button fullWidth
            className='customeButton'
            type='submit'
            sx={{padding:"0.9rem"}}>
            Register
            </Button>
        </Grid>
        </div>
    </form>
    <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>Signin</Button>
    </div>
  </div>
  )
}

export default SignupForm
