import React, {useContext, useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Container, List, ListItem, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext'
import Axios from "axios";
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";


const baseUrl = 'http://127.0.0.1:8000/'

const ClientHomeContent = () => {

  const [freelancer, setFreelancer] = useState([])
  const {authTokens, user} = useContext(AuthContext)

  useEffect( () => {
      Axios.get(baseUrl+'base/viewFreelancer/',
      {
          headers:{
              'Content-Type': 'application/json',
              Authorization: `Bearer  ${authTokens.access}`
          }
      }).then((response) => {
        console.log(response);
        setFreelancer(response.data[0])

      })
  },[])

  console.log('gggggggg', localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);

  return (
    <>    
    <Box sx={{
        display:"flex",
        m:2,
        justifyContent:"center",
        
    }}>
        <Button sx={{
          m:2,
          backgroundColor:"navy",
          borderRadius:5,
          '&:hover':{
            backgroundColor:"navy"
          }}} variant="contained">Web Development</Button>
        <Button sx={{
          m:2,
          backgroundColor:"navy",
          borderRadius:5,
          '&:hover':{
            backgroundColor:"navy"
          }}} variant="contained">Web Designing</Button>
        <Button sx={{
          m:2,
          backgroundColor:"navy",
          borderRadius:5,
          '&:hover':{
            backgroundColor:"navy"
          }}} variant="contained">Photography</Button>
        <Button sx={{
        m:2,
        backgroundColor:"navy",
        borderRadius:5,
        '&:hover':{
          backgroundColor:"navy"
        }}} variant="contained">Full Stack</Button>
    </Box>
    <Box sx={{
      width:"100%",
      height:'auto',
      // backgroundColor:'black'
      m:2
    }}>

    <Container sx={{
      width:"70%",
      height:'auto',
      backgroundColor:'white',
      borderRadius:2,
      border:1,
      borderColor:'navy',
      // display:"flex"
    }}>

      <Box sx={{
        display:"flex"
      }}>
      {/* Profile Image */}
      <Box component="img" sx={{
        width:"12%",
        height:100,
        // backgroundColor:'green',
        border: 1,
        borderColor:"navy",
        borderRadius:2,
        marginTop:2,
        
      }}
      alt="Profile Pic"
      src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpgw=1060&t=st=1672288416~exp=1672289016~hmac=2ab83686dc8de49ee59214f1778db4ac112315bbc57151e7e28e4bc910f7a525"
      >
        
      </Box>

      {/* Freelancer Name & Details */}
      <Typography sx={{
        font:'Poppins',
        fontWeight:"100%",
        fontSize:24,
        margin:2
      }}>
        Username{/* {freelancer.user.username} */}
        <Typography sx={{
          color:"#555151",
          marginTop:2
        }}>
          Company Name{/* {freelancer.user.company_name} */}
        </Typography>
        <Typography sx={{
          fontSize:12,
          color:"#9E9E9E"
        }}>
          District, State, Country{/* {freelancer.district}, {freelancer.state}, {freelancer.country} */}
        </Typography>
      </Typography>

      {/* Freelancer Post */}
      <Button variant="contained" sx={{
        justifyContent:"flex-end",
        height:30,
        marginLeft:'auto',
        marginTop:2,
        borderRadius:4,
        backgroundColor:"#FFC107",
        color:"black",
        '&:hover':{
          backgroundColor:"#FFC107"
        }
      }}>{freelancer.job_role}</Button>
      </Box>
      
      <Box 
        sx={{
        backgroundColor:'white',
        width:"100%",
        height:90
      }}>
        <List sx={{
          color:"#413E3E"
        }}>
          <ListItem>
            Experience of using programs such as Photoshop and InDesign.
            Creating products that are user-friendly, effective and appealing
          </ListItem>
          <ListItem>
            Experience of using programs such as Photoshop and InDesign.
            Creating products that are user-friendly, effective and appealing
          </ListItem>
        </List>
      </Box>

      <Box sx={{
          // justifyContent: 'space-evenly',
          // backgroundColor:"beige",
          // justifyContent:'flex-end',
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"flex-end",
          height:"auto",
          width:"100%"
        }}>
          <Button sx={{
            // backgroundColor:'navy', 
            borderRadius:2,
            m:2,
            color:"black",
            '&:hover':{
              // backgroundColor:"navy",
              // borderColor:'navy',
              // color:'navy'
            }
          }} variant='outlined'><Link to="/freelancersdetails" >View Profile</Link></Button>

        <Button sx={{
            borderRadius:2,
            borderColor:"navy", 
            color:"navy",
            m:2,
          }} variant='outlined'>Contact Us</Button>
        </Box>
    </Container>
    </Box>
    </>

 
  )
}

export default ClientHomeContent