import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmissionList from './SubmissionList';
import EditTaskForm from './EditTaskForm';

const role="ROLE_ADMIN"
const TaskCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const [openUserList,setOpenUserList] = useState(false);
    const [openSubmissionList,setOpenSubmissionList] = useState(false);
    const [openUpdateTaskForm,setOpenUpdateTaskForm] = useState(false);
    
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenUserList=()=>{
        setOpenUserList(true);
        handleMenuClose()
    }
    const handleCloseUserList=()=>{
        setOpenUserList(false);
    }
    const handleOpenSubmissionList=()=>{
        setOpenSubmissionList(true);
        handleMenuClose()
    }
    const handleCloseSubmissionList=()=>{
        setOpenSubmissionList(false);
    }
    const handleOpenUpdateTaskForm=()=>{
        setOpenUpdateTaskForm(true);
        handleMenuClose()
    }
    const handleCloseUpdateTaskForm=()=>{
        setOpenUpdateTaskForm(false);
    }
    const handleDeleteTask=()=>{
        
    }
    return (
      <div>
        <div className="card lg:flex justify-between">
          <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
            <div>
              <img
                className="lg:w-[7rem] lg:h-[rem] object-cover"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/angular-icon.png"
                alt="Task"
              />
            </div>
            <div className="space-y-5">
        <div className="space-y-2">
          <h1 className="font-bold text-lg">Car Rental Website</h1>
          <p className="text-gray-500 text-sm">
            Use the latest frameworks and technology to make this website.
          </p>
        </div>
  
        <div className="flex flex-wrap gap-2 items-center">
          {[1,1,1,1,1].map((tech, index) => (
            <span key={index} className="py-1 px-5 rounded-full techStack">
              Angular
            </span>
          ))}
        </div>
      </div>
          </div>
          <div>
            <IconButton   id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}>
                <MoreVertIcon/>
            </IconButton>
                <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {
              role==="ROLE_ADMIN"?<>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem> 
                <MenuItem onClick={handleOpenUpdateTaskForm}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
                </>:<>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </>
            }
            
        </Menu>
          </div>
        </div>
        <UserList open={openUserList} handleClose={handleCloseUserList}/>
        <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
        <EditTaskForm open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
      </div>
    );
  };

export default TaskCard
