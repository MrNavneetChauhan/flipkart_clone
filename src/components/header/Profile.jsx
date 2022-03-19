import React from 'react'
import { Menu , MenuItem } from '@material-ui/core';
import { useStyles } from './profileStyle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
export const Profile = ({user,updateUser}) => {
  // console.log(updateUser)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logoutHandle = ()=>{
    setAnchorEl(null);
    updateUser("")
  }


  const classes = useStyles();
  return (
      
      <>
    <p className={classes.user_name} onClick={handleClick} >{user}</p>
    <Menu
        className={classes.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logoutHandle}> <PowerSettingsNewIcon/>  Logout</MenuItem>
      </Menu>
      </>
  )
}
