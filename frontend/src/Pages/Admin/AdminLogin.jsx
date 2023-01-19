import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const AdminLogin = () => {
    let {loginAdmin} = useContext(AuthContext)
  return (
    <div className='login-div'>
      
        <form onSubmit={loginAdmin}>
         
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
              
            }}>Admin Here</Typography>

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

            <Typography textAlign='left' component='p' sx={{
                          color:"navy",
                          fontSize:20,
                          fontWeight:400
                }}>Not Registered Yet? Create an account</Typography>
          </Box>
          </Box>
         
         
         
        </form>
    </div>
  )
}

export default AdminLogin