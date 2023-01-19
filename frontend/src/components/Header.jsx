import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";


const pages = ["Home", "Works", "Chat", "Profile"];
const settings = ["Profile", "Logout"];

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = (setting) => {
  //   if (setting === "Profile") {
  //     navigate("/user/profile");
  //   }else if (setting === "Logout"){
  //     logoutUser()
  //   }
  //   setAnchorElUser(null);

  // };

  const handleHeadNav = (page) => {
    console.log(page);
    if (page === "Home") {
      navigate("/user/home");
    } else if (page === "Works") {
      navigate("/user/works");
    }else if(page === "Chat"){
      navigate("/user/chat")
    }else if(page=== "Profile"){
      navigate("/user/profile")
    }
  };

  return (
    <AppBar position="static" sx={{backgroundColor:"#EFF1F0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "navy",
              textDecoration: "none",
            }}
          >
            Find
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="navy"
            >
              <MenuIcon sx={{color:'navy'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => navigate("/user/chat")}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={() => navigate("/user/profile")} key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "navy",
              textDecoration: "none",
            }}
          >
            Find
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={(e) => handleHeadNav(page)}
                sx={{ my: 2, color: "navy", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? 
            
            // <Tooltip title="Open settings">
            //   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            //     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            //   </IconButton>
            // </Tooltip>
          //   <Menu
          //   sx={{ mt: "45px" }}
          //   id="menu-appbar"
          //   anchorEl={anchorElUser}
          //   anchorOrigin={{
          //     vertical: "top",
          //     horizontal: "right",
          //   }}
          //   keepMounted
          //   transformOrigin={{
          //     vertical: "top",
          //     horizontal: "right",
          //   }}
          //   open={Boolean(anchorElUser)}
          //   onClose={handleCloseUserMenu}
          //   //
          // >
          //   {settings.map((setting) => (
          //     <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(setting)}>
          //       <Typography textAlign="center">{setting}</Typography>
          //     </MenuItem>
          //   ))}
          // </Menu> : 
          // <p
          //   color="success"
          // >Signup</p> 
          <Button variant="contained"  onClick={logoutUser}
          sx={{ my: 2, backgroundColor:"navy", color: "white", display: "block",
                "&hover":{
                  backgroundColor:"navy"
               } }}
        >Logout
        </Button> : 
          <Button variant="contained"
          sx={{ my: 2, backgroundColor:"navy", color: "white", display: "block",
                "&hover":{
                  backgroundColor:"navy"
                }}}
        >Signup
        </Button>
          }
          </Box>
        </Toolbar>
        <div>
          {/* {user && <p onClick={logoutUser}>Logout</p>} */}

          {/* {user && <p>Hello {user.username} </p>} */}
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
