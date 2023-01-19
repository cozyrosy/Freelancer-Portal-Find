import { Container } from '@mui/system'
import React from 'react'
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import { Typography, ListItem, ListItemText, Button, } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };  


const ClientFreelancerDetails = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [projectType, setProjectType] = React.useState('');

  const handleChange = (event) => {
    setProjectType(event.target.value);
  };


  const [value, setValue] = React.useState(dayjs());

  const handleChange2 = (newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Container sx={{backgroundColor:"", marginTop:3, marginBottom:3, border:2, borderRadius:5, borderColor:"navy"}}>
            <Box sx={{display:"flex"}}>
                <Box sx={{height:'auto', backgroundColor:"white",  marginTop:2}}>
                    <Avatar  variant="square" sx={{
                        width:250,
                        height:250,
                        borderRadius:5
                        
                    }}
                    src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=1060&t=st=1672808482~exp=1672809082~hmac=8187ccd2736838837403d2ddf41b8341fb9ecd4938621860cd507405b4636fbd"
                    />
                    <Typography sx={{fontSize:28, marginLeft:1, marginTop:2, color:"navy"}}>
                        Akhil Mohan
                    </Typography>
                    <Typography sx={{fontSize:15, marginLeft:1, color:"#9E9E9E"}}>
                        Web Designer
                    </Typography>
                    <List sx={{color:'navy', marginLeft:0 }}>
                        <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><LocalPostOfficeIcon/>
                        <ListItemText sx={{ 
                        marginLeft:2,
                        fontWeight:5,
                        color:"#6D6D6D"}} >sample@gmail.com</ListItemText>
                        </ListItem>

                        <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><PhoneIcon/>
                        <ListItemText sx={{ 
                        marginLeft:2,
                        fontWeight:5,
                        color:"#6D6D6D"}} >8759625412</ListItemText>
                        </ListItem>

                        <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><PlaceIcon/>
                        <ListItemText sx={{ 
                        marginLeft:2,
                        fontWeight:5,
                        color:"#6D6D6D"}}> addaf, asddf, adfdf </ListItemText>
                        </ListItem>
                        
                        <ListItem sx={{display:"flex",  fontSize:20,color:"#bec0c2"}}><CalendarTodayIcon/>
                        <ListItemText sx={{ 
                        marginLeft:2,
                        fontWeight:5,
                        color:"#6D6D6D"}}> 20/05/2022</ListItemText>
                        </ListItem>
                    </List>
                    <Box sx={{display:"flex"}}>
                        <Button variant="outlined" sx={{marginBottom:2,}}><Link to="/user/chat" >Contact Me</Link></Button>
                        <Button variant="outlined" onClick={handleOpen}
                            sx={{
                            marginBottom:2, 
                            marginLeft:1, 
                            backgroundColor:"navy", 
                            color:"white",
                            "&:hover":{
                            backgroundColor:"navy", 
                            color:"white",
                            }
                        }}>
                            Apply here
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                                    Application
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                               
                                    <TextField sx={{width:"100%"}}
                                        required
                                        id="outlined-required"
                                        label="Project Name"
                                        />

                                    <Box sx={{display:"flex"}}>
                                        <FormControl fullwidth sx={{mt:2, width:"35%"}}>
                                            <InputLabel id="demo-simple-select-label">Project Type</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={projectType}
                                            onChange={handleChange}
                                            
                                            label="Project Type"
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Twenty</MenuItem>
                                            <MenuItem value={21}>Twenty one</MenuItem>
                                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker 
                                                label="Date desktop"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange2}
                                                renderInput={(params) => <TextField sx={{marginTop:2, marginLeft:2}} {...params} />}
                                                />
                                        </LocalizationProvider>
                                </Box>
                                    
                                    <TextField sx={{mt:2,width:"100%"}}
                                    id="filled-textarea"
                                    label="Project Description"
                                    placeholder="Placeholder"
                                    multiline
                                    variant="outlined"
                                    />
                                </Typography>
                                <Button variant="contained" sx={{backgroundColor:"navy", mt:2, alignItems:"end"}}>Submit</Button>
                            </Box>
                        </Modal>

                    </Box>
                </Box>
                <Box>
                    <Typography sx={{marginLeft:5, marginTop:3, fontSize:25, color:"navy"}}>Experience
                        <Typography sx={{color:"#413E3E", marginTop:2}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:1}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.
                        Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:2}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:1}}>Experience of using programs such as Photoshop and InDesign.</Typography>
                    </Typography>


                    <Typography sx={{marginLeft:5, marginTop:3, fontSize:25, color:"navy"}}>Skills
                    <Typography sx={{color:"#413E3E", marginTop:2}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:1}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.
                        Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:2}}>Experience of using programs such as Photoshop and InDesign.Experience of using programs such as Photoshop and InDesign.</Typography>
                        <Typography sx={{color:"#413E3E", marginTop:1}}>Experience of using programs such as Photoshop and InDesign.</Typography>
                    </Typography>

                    <Typography sx={{marginLeft:5, marginTop:3, fontSize:25, color:"navy"}}>Works
                        <Box sx={{ display:"flex", m:1}}>
                        <Avatar  variant="square" sx={{
                            width:250,
                            height:250,
                            marginBottom:2,
                            borderRadius:5,
                            border:3, 
                            borderColor:"navy",
                            marginRight:3
                        }}
                        src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=740&t=st=1673608931~exp=1673609531~hmac=7fa53069c25568d5510abc0dab5d2824c81de525ac04efac6604e60e3a7b8954"
                        />
                        <Avatar  variant="square" sx={{
                            width:250,
                            height:250,
                            marginBottom:2,
                            borderRadius:5,
                            border:3, 
                            borderColor:"navy",
                            marginRight:3
                        }}
                        src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=740&t=st=1673608931~exp=1673609531~hmac=7fa53069c25568d5510abc0dab5d2824c81de525ac04efac6604e60e3a7b8954"
                        />
                        <Avatar  variant="square" sx={{
                            width:250,
                            height:250,
                            marginBottom:2,
                            borderRadius:5,
                            border:3, 
                            borderColor:"navy"
                        }}
                        src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-542.jpg?w=740&t=st=1673608931~exp=1673609531~hmac=7fa53069c25568d5510abc0dab5d2824c81de525ac04efac6604e60e3a7b8954"
                        /> 
                        </Box>
                    </Typography>

                </Box>
            </Box>
      </Container>
    </>
  )
}

export default ClientFreelancerDetails