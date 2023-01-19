import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer from '../Footer'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Person ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}



const Chat = () => {
  return (
    <div>
      <Typography sx={{
        marginLeft:20,
        marginTop:5,
        font:"Poppins",
        fontWeight:"30%",
        fontSize:30,
        color:"navy"
      }}>Chats</Typography>

      <Container sx={{
        justifyContent:"center",
        width:"100%",
        marginTop:3,
        marginBottom:8,
        height:500,
        // backgroundColor:"black",
        border:2,
        borderRadius:5,
        borderColor:"navy",
        display:"flex"
      }}>
        {/* <Box sx={{
          width:"40%",
          height:"100%",
          backgroundColor:"green"
        }}> */}
          
          <Box sx={{ 
            width: '25%', 
            height: 460, 
            maxWidth: 360, 
            borderRight:2,
            
            borderColor:"navy",
            marginTop:2,
            bgcolor: 'background.paper' 
          }}>
            <Box sx={{
              width:'93%',
              height:50,
              border:2,
              borderColor:"navy",
              borderRadius:5
            }}>
              <Search sx={{m:1}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              
            </Box>
            <FixedSizeList
              height={400}
              width={290}
              itemSize={46}
              itemCount={10}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
            
          </Box>
            <Box sx={{
              width:"75%",
              height:"100%",
              // backgroundColor:"black"
            }}>
              
              <Box sx={{
                width:"100%",
                height:"12%",
                // backgroundColor:"blue",
                display:'flex',
                borderBottom:2,
                borderColor:"navy"
              }}>
                <Avatar alt="Remy Sharp" sx={{
                  marginLeft:2,
                  width:50,
                  height:50,
                  marginTop:0.5
                  
                }}
                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1672808482~exp=1672809082~hmac=8187ccd2736838837403d2ddf41b8341fb9ecd4938621860cd507405b4636fbd" />
                <Typography sx={{
                  marginTop:2,
                  marginLeft:2,
                  color:'navy'
                }}>
                  Username
                </Typography>
              </Box>
              <Box sx={{
                width:"100%",
                height:"70%",
                // backgroundColor:"green"
              }}>
                Chat Section
              </Box>
              <Box sx={{
                width:"100%",
                height:"15%",
                display:"flex",
                // backgroundColor:"yellow"
              }}>
                <Box sx={{width:"80%", marginLeft:4}}>
                  <Search sx={{
                    m:1,
                    border:2,
                    borderColor:"navy",
                    borderRadius:4,
                  
                    }}>
                    <StyledInputBase
                      placeholder="Type a message"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Box>
                <Box>
                  <Button variant="contained" type="submit"
                      sx={{
                        m:1,
                      backgroundColor:"navy",
                      "&:hover":{
                          backgroundColor:"navy"
                      }
                      }}>Send</Button>
                </Box>
                
              </Box>

            </Box>
          
        {/* </Box> */}
          
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Chat