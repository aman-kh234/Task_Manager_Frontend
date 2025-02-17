import { Avatar } from '@mui/material';
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
      <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
        <p className="font-bold text-lg">Task Manager</p>
  
        <div className="flex items-center gap-5">
          <p>codewithaman</p>
          <Avatar src='https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid' sx={{backgroundColor:"#c24dd0"}} className='bg-[#c24dd0]'>C</Avatar>
        </div>
      </div>
    );
  };
  
  export default Navbar;
