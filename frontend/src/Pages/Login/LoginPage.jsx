import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './login.css'
import { Navigate, NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';




function LoginPage() {
  let {loginUser} = useContext(AuthContext)

  const navigate = useNavigate()
  // sign up modal
  const [open, setOpen] = React.useState(false);
  const [freelancer, setFreelancer] = useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleFreelancer = () => {
      navigate("/signup-freelancer")
      setOpen(false);
      setFreelancer(true);
  };

  const handleClient = () => {
    navigate("/signup")
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  }



  return (
    <>
      <Box className='login-div'>
        
          <form onSubmit={loginUser}>
          
          <Box
          display='flex'
          justifyContent='center'
              alignItems="center"
          >

          
          
              <Box
              display="flex"
              flexDirection={"column"} 
              
              sx={{
                '& > :not(style)': { m:2 ,  },
                // marginRight:20,
                marginTop:15,
                width:600,
                height:500,
                backgroundColor:'',
                border:1,
                borderColor:'navy',
                borderRadius:5
                
              }}
              noValidate
              autoComplete="off"
              >
              
              <Typography variant="h3" textAlign="center" sx={{
                color:"navy",
                
              }}>LOGIN</Typography>

              <TextField id="outlined-basic" label="Username" variant="outlined" type="text" name="username" sx={{
                marginTop:60
              }}/>
              <TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="password"/>

              <Typography textAlign='right' component='p' sx={{
                color:"navy",
                fontSize:20,
                fontWeight:400
              }}> Forgot Password ?</Typography>

              <Button variant="contained" type="submit" sx={{
                backgroundColor:"navy",
                "&:hover":{
                  backgroundColor:"navy"
                }
              }}>Submit</Button>

              <Typography textAlign='left' component='p' onClick={handleClickOpen} sx={{
                            color:"navy",
                            fontSize:20,
                            fontWeight:400
                  }}>Not Registered Yet? Create an account</Typography>
            </Box>
            </Box>
          
          
          </form>

        
      </Box>
      <Box  >
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{
            backgroundColor:"grey"
          }}
        >
          <DialogTitle id="responsive-dialog-title" sx={{fontSize:35, color:"#0E0E34"}}>
            {"How do you want to be associated with us ?"}
          </DialogTitle>
          <DialogContent>
            <Box display={'flex'} sx={{}}>
              <Box sx={{
                m:1,
                width:"50%",
                border:3,
                borderColor:"navy",
                borderRadius:5
              }}>
                <BadgeOutlinedIcon sx={{ marginLeft:11 , color:"navy", fontSize:70}} />
                <Typography sx={{m:2}}>
                  A freelancer is an independent contractor.
                  We enable you to find your clients and enhance the business </Typography>
                <DialogActions>
                  <Button variant='contained' onClick={handleFreelancer} sx={{marginRight:7, backgroundColor:"navy", color:"white"}}>
                    Freelancer
                  </Button>
                </DialogActions>
              </Box>
              <Box sx={{
                m:1,
                width:"50%",
                border:3,
                borderColor:"navy",
                borderRadius:5
              }}>
                <PersonSearchIcon sx={{ marginLeft:11 , color:"navy", fontSize:70}} />
                <Typography sx={{m:2}}>
                  As a Client you can browse for the best freelancers and choose the suitable candidate for your project.
                </Typography>
                <DialogActions>
                  <Button onClick={handleClient} variant='contained' sx={{marginRight:10, backgroundColor:"navy", color:"white"}}>
                    Client
                  </Button>
                </DialogActions>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  )
}

export default LoginPage




