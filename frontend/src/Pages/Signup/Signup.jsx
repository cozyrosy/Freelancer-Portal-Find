import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';


const baseUrl = "http://127.0.0.1:8000/api/register/";

const Signup = () => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [userData, setUserData] = useState({
    
      username: "",
      phone_number:"",
      email: "",
      password: "",
      password2: "",
    });
    
    const handleChange= (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    };

    console.log(userData);

    const submitForm = (e) => {
      e.preventDefault();
      setFormErrors(validate(userData));
      // if (formErrors) {
      //   Swal.fire("error", "Something went wrong!");
      // }
  
      Axios.post(baseUrl, {
        
        username: userData.username,
        phone_number:userData.phone_number,
        email: userData.email,
        password: userData.password,
        password2: userData.password2,
      }).then((response) => {
   
        console.log("ooooooooooooooooo",response.data);
        navigate("/");
        
  
      }).catch((err)=>{
        console.log(err);
      });
    };

    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(userData);
      }
    }, [formErrors]);
   
    const validate = (values) => {
      console.log("validating");
      const errors = {};
    
      if (!values.phone_number) {
        errors.phone_number = "Phone number is required";
      }
      if (!values.email) {
        errors.email = "Email  is required";
      }
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.password.length < 4) {
        errors.password = "Password length more than 4 characters";
      }
      if (values.password !== values.password2) {
        errors.password2 = "Confrim password does not match";
      }
      return errors;
    };


    function odiko() {
      navigate("/");
    }



  return (
    <div className='login-div'>
        <form >
         
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
                    marginTop:5,
                    width:600,
                    height:500,
                    backgroundColor:'',
                    //   border:1,
                    //   borderColor:'navy',
                    //   borderRadius:5
                    
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    
                    <Typography variant="h3" textAlign="center" sx={{
                    color:"navy",
                    
                    }}>Signup</Typography>

                    <TextField onChange={handleChange} id="outlined-basic" label="Username" variant="outlined" type="text" name="username" sx={{
                    marginTop:60
                    }}/>
                    <TextField onChange={handleChange} id="outlined-basic" label="Phone" variant="outlined" type="tel" name="phone_number" sx={{
                    marginTop:60
                    }}/>
                    <TextField onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" type="email" name="email" sx={{
                    marginTop:60
                    }}/>
                    <TextField onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" type="password" name="password"/>
                    <TextField onChange={handleChange} id="outlined-basic" label="Confirm Password" variant="outlined" type="password" name="password2"/>

                    <Typography textAlign='right' component='p' sx={{
                    color:"navy",
                    fontSize:15,
                    fontWeight:400
                    }}>
                      <NavLink to="/">Already a user ? Login Here</NavLink> 
                    </Typography>


                    <Button variant="contained" type="submit"
                     onClick={submitForm}
                      sx={{
                    backgroundColor:"navy",
                    "&:hover":{
                        backgroundColor:"navy"
                    }
                    }}>Submit</Button>
                </Box>
            </Box>

        </form>
    </div>
  )
}

export default Signup