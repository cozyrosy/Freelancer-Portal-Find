import React from 'react'
import Box from "@mui/material/Box";
import {Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#DDDADA',
  border: '2px solid navy',
  borderRadius:5,
  boxShadow: 24,
  p: 4,
};




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Akhil', 'Sooryajith', 'asdjfsaodifjqoierjojasdfjjhl', 5424153687),
    
  ];

const AdminReportedList = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
    <Box sx={{marginTop:5, marginLeft:32, width:600, height:60}}> 
            <Typography sx={{color:"navy", fontSize:30, marginLeft:3}}>Reported Applications </Typography>
      </Box>
      <Box>
      <TableContainer component={Paper} sx={{width:"80%", marginLeft:35, marginTop:3}}>
          <Table sx={{ width: "100%",  }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Applicant</TableCell>
                <TableCell align="right">Reported Person</TableCell>
                <TableCell align="right">Reason for reporting</TableCell>
                <TableCell align="right">Contact</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Button variant='contained' onClick={handleOpen} color='primary'>View</Button>
                      {/* Modal View Start */}
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          
                        >
                          <Box sx={style}>
                            <HighlightOffIcon onClick={handleClose} sx={{ float:"right", color:'red', cursor:'pointer'}}></HighlightOffIcon>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Details
                            </Typography>
                            <Box sx={{display:"flex", m:2}}>
                              <List sx={{width:"50%", }}>
                                
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                      primary="Applicant Name"
                                      secondary={
                                        <React.Fragment>
                                          <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="#6D6060"
                                          >
                                            Akhil Mohan
                                          </Typography>
                                          
                                        </React.Fragment>
                                      }
                                    />
                                  </ListItem>
                                <ListItem alignItems="flex-start">
                                  <ListItemText
                                    primary="Reported Person"
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          component="span"
                                          variant="body2"
                                          color="#6D6060"
                                        >
                                          Sooryajith
                                        </Typography>
                                        
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                {/* <Divider variant="inset" component="li" /> */}
                              </List>
                              <List sx={{width:"50%", marginLeft:1}}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                      primary="Reason for Reporting"
                                      secondary={
                                        <React.Fragment>
                                          <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="#6D6060"
                                          >
                                            Lists are a continuous group of text or images. 
                                          </Typography>
                                          
                                        </React.Fragment>
                                      }
                                    />
                                  </ListItem>
                                <ListItem alignItems="flex-start">
                                  <ListItemText
                                    primary="Contact"
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          component="span"
                                          variant="body2"
                                          color="#6D6060"
                                        >
                                          9856745812
                                        </Typography>
                                        
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                              {/* <Divider variant="inset" component="li" /> */}
                              </List>
                            </Box>
                          </Box>
                        </Modal>
                      {/* Modal View End */}
                    <Button variant='contained' color='error' sx={{ marginLeft:2}}>Block</Button>  
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default AdminReportedList