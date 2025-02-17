import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  p: 2,
};

const tasks=[1,1,1];
const UserList=({handleClose,open})=>{
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          User List
          </Typography>
          {
            tasks.map((item, index) => (
              <>
              <div key={index} className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid" />
                    </ListItemAvatar>
                    <ListItemText secondary="@codeaman" primary={"Code With Aman"} />
                  </ListItem>
                </div>
                <div>
                  <Button className="customeButton">Select</Button>
                </div>
              </div>
              {index!==tasks.length-1 && <Divider variant='inset'/>}
              </>
            ))
          }

        </Box>
      </Modal>
    </div>

)}

export default UserList;
