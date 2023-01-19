import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext";

import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import { Outlet, useNavigate } from "react-router-dom";


const drawerWidth = 240;

const AdminHeader = () => {

    const { user, logoutAdmin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleHeadNav = (page) => {
        console.log(page);
        if (page === "Dashboard") {
          navigate("/admin/admin-home");
        } else if (page === "Clients") {
          navigate("/admin/admin-client-list");
        }else if(page === "Freelancers"){
          navigate("/admin/admin-freelancers-list")
        }else if(page=== "Report"){
          navigate("/admin/admin-reported-list")
        }else if(page === "Logout"){
            logoutAdmin()
        }
      };
    


  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor:"#EFF1F0" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div"
          sx={{
            mr: 2,
            display: { xs: "block", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            fontSize:36,
            letterSpacing: ".3rem",
            color: "navy",
            textDecoration: "none",
          }}>
            Find
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto',backgroundColor:"white", marginTop:5, height:700, color:"navy" }}>
          <List>
            {['Dashboard', 'Clients', 'Freelancers', 'Report', 'Logout'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{color:"navy"}}>
                    {index % 2 === 0 ? <GroupIcon /> : <BadgeIcon />}
                  </ListItemIcon>
                  <ListItemText onClick={(e) => handleHeadNav(text)} primary={text} />
                </ListItemButton>
              </ListItem>
              
            ))}
            <Divider />
          </List>  
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* <Outlet/> */}
      </Box>
    </Box>
  </>
  )
}

export default AdminHeader