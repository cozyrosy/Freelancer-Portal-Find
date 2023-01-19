import { Button, ListItem, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, {useContext, useEffect, useState} from 'react'
import Footer from '../Footer'
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Axios from "axios";
import AuthContext from '../../context/AuthContext'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const baseUrl = 'http://127.0.0.1:8000/'


const Profile = () => {

  
  const [profile, setProfile] = useState([])
  const {authTokens} = useContext(AuthContext)

  useEffect( () => {
      Axios.get(baseUrl+'base/userProfile/',
      {
          headers:{
              'Content-Type': 'application/json',
              Authorization: `Bearer  ${authTokens.access}`
          }
      }).then((response) => {
        console.log(response) 
        console.log('yyyyyyyyyyyyyyyyyy',response.data[0]);
        setProfile(response.data[0])
        console.log('zzzzzzzzzz',profile);
        // console.log('pppppppppp',response.data.district);


      })
  },[])
  return (
    <>
  {/* PROFILE HEAD START */}
    <Box>
      <Typography sx={{ 
        marginTop:3,
        marginLeft:20,
        font:"Poppins",
        fontWeight:"25%",
        fontSize:30,
        color:"navy"
      }}>
         My Profile
      </Typography>
    </Box>
  {/* PROFILE HEAD END */}



{/* PROFILE DETAIL BOX STARTS */}
    <Container
      sx={{
      height:"auto",
      // backgroundColor:'blanchedalmond',
      marginTop:2,
      marginBottom:4,
      border:2,
      borderColor:"navy",
      borderRadius:5
    }}>

      {/* PROFILE PICTURE AND DETAILS STARTS */}
      <Box>
        <Box sx={{
          display:"flex",
          // backgroundColor:'yellow',
          height:270
        }}>
        
              {/* <Avatar alt={profile?.user?.username} variant="square" sx={{
                    width:250,
                    height:250,
                    marginTop:3,
                    borderRadius:5
                    
                  }}
                  src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1672808482~exp=1672809082~hmac=8187ccd2736838837403d2ddf41b8341fb9ecd4938621860cd507405b4636fbd"
                  /> */}
            
          <Box sx={{height:270}}>
            <Box display={'flex'} sx={{height:"27%"}}>
              <Typography sx={{
                        marginTop:5,
                        marginLeft:2,
                        color:'navy',
                        fontSize:30,
                        fontWeight:"40%",
                        width:250,
                      }}>
                        {profile.user.username}
              </Typography>
              {/* <Button  variant="contained" type="submit"
                            sx={{
                              marginTop:5,
                              marginLeft:30,
                              height:35,
                              width:90,
                              borderRadius:3,
                              display:"",
                              backgroundColor:"navy",
                              "&:hover":{
                                  backgroundColor:"navy"
                                }
                              }}>
                  Edit <BorderColorIcon sx={{ m:1,fontSize:20}}/>
              </Button> */}
              <Button  variant="outlined" type="submit"
                            sx={{
                              marginTop:5,
                              marginLeft:3,
                              height:35,
                              borderRadius:3,
                              borderColor:'navy',
                              color:"navy",
                              '&hover':{
                                color:'#202172'
                              }
                              
                              }}>
                  Change Password <ChangeCircleOutlinedIcon  sx={{ marginLeft:1}}/>
              </Button>
            </Box>
            <Box>
              <List sx={{color:'navy', marginLeft:1 }}>
                
                {/* <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}>
                  <ListItemText sx={{ 
                  marginLeft:2,
                  fontWeight:5,
                  color:"#6D6D6D"}} >{profile?.user?.email}</ListItemText>
                </ListItem> */}

                <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><PhoneIcon/>
                  <ListItemText sx={{ 
                  marginLeft:2,
                  fontWeight:5,
                  color:"#6D6D6D"}} >{profile.user.phone_number}</ListItemText>
                </ListItem>

                <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><PlaceIcon/>
                  <ListItemText sx={{ 
                  marginLeft:2,
                  fontWeight:5,
                  color:"#6D6D6D"}}> {profile.district}, {profile.state}, {profile.country} </ListItemText>
                </ListItem>
                
                <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><CalendarTodayIcon/>
                  <ListItemText sx={{ 
                  marginLeft:2,
                  fontWeight:5,
                  color:"#6D6D6D"}}> {profile.user.date_joined}</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* PROFILE PICTURE AND DETAILS ENDS */}

      {/* PROFILE DESCRIPTION STARTS */}
      <Box >
        <Typography sx={{fontSize:30, marginLeft:1, marginTop:3, color:"black"}}>About Me</Typography>
          <Typography sx={{ 
          marginLeft:1,
          fontWeight:15,
          color:"black"}} >{profile.summary}
        </Typography>
        <Typography sx={{fontSize:30, marginLeft:1, marginTop:3, color:"black"}}>Works</Typography>  

        {/* WORK DETAILS STARTS  */}
        <Box 
        sx={{
          width:"100%",
          height:'auto',
          backgroundColor:'white',
          borderRadius:2,
          border:1,
          borderColor:'navy',
          marginBottom:2
          // display:"flex"
        }}>

          <Box sx={{
            display:"flex"
          }}>

    {/* Freelancer Name & Details */}
    
            <Typography sx={{
              font:'Poppins',
              fontWeight:"100%",
              fontSize:24,
              margin:2
            }}>
              Projects Name
              <Typography sx={{
                color:"#555151",
                marginTop:0
              }}>
                Freelancer Name
              </Typography>
              <Typography sx={{
                fontSize:12,
                color:"#9E9E9E"
              }}>
                District, State, Country
              </Typography>
            </Typography>
            <Button variant='contained' sx={{height:40, marginLeft:100, marginTop:3, backgroundColor:"navy"}} >View Detail</Button>

          </Box>   
          <Box sx={{
            width:"100%",
            height:"auto"
          }}>
              <List sx={{
                color:"#413E3E"
              }}>
                <ListItem>
                  Experience of using programs such as Photoshop and InDesign.
                  Creating products that are user-friendly, effective and appealing
                </ListItem>
                
              </List>
          </Box>
        </Box>
        {/* WORK DETAILS ENDS  */}

      </Box>
      {/* PROFILE DESCRIPTION ENDS */}

    </Container>
{/* PROFILE DETAIL BOX ENDS */}



{/* FOOTER STARTS */}
    <Footer></Footer>
{/* FOOTER STARTS */}

    </>
  )
}

export default Profile