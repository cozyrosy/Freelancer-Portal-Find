import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import { List } from "@mui/material";

const pages = ["Home", "Works", "Chat"];
const settings = ["Profile", "Logout"];

const Footer = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Profile") {
      navigate("/user/profile");
    }else if (setting === "Logout"){
      logoutUser()
    }
    setAnchorElUser(null);

  };

//   const handleHeadNav = (page) => {
//     console.log(page);
//     if (page === "Home") {
//       navigate("/user/home");
//     } else if (page === "Works") {
//       navigate("/user/works");
//     }else if(page == "Chat"){
//       navigate("/user/chat")
//     }
//   };

  return (
    <AppBar position="static" sx={{backgroundColor:"#EFF1F0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box> */}
        </Toolbar>
        <div>
          {/* {user && <p onClick={logoutUser}>Logout</p>} */}

          {/* {user && <p>Hello {user.username} </p>} */}

          <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          bgcolor: '#EFF1F0',
          borderRadius: 1,
          color:"navy"
        }}
      >
        <ListItem sx={{
          fontFamily:"Post No Bills Colombo",
          fontSize:50
        }}>Find
            <List sx={{
              fontSize:15,
            }}>
              <ListItem>Block E, Level 2, Selangor</ListItem>
              <ListItem>47500.</ListItem>
              <ListItem>Malaysia</ListItem>
            </List>
        </ListItem>
        <ListItem>2022 Find</ListItem>
        <List>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Terms & Conditions</ListItem>
        </List>
        
      </Box>
        </div>
      </Container>
    </AppBar>
  );
};

export default Footer;
