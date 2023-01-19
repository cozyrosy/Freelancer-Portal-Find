import React, {useContext, useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import { Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthContext from '../../context/AuthContext'
import Axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  
];

const AdminClientsList = () => {

  const [client, setClient] = useState([])
  const {authTokens} = useContext(AuthContext)

  useEffect( () => {
      Axios.get(baseUrl+'base/clientlist',
      {
          headers:{
              'Content-Type': 'application/json',
              Authorization: `Bearer  ${authTokens.access}`
          }
      }).then((response) => {
        console.log(response);
        setClient(response.data)

      })
  },[])

  return (
    <>
      <Box sx={{marginTop:5, marginLeft:32, width:600, height:60}}> 
            <Typography sx={{color:"navy", fontSize:30, marginLeft:3}}>Clients List </Typography>
      </Box>
      <Box>
      <TableContainer component={Paper} sx={{width:"80%", marginLeft:35, marginTop:3}}>
          <Table sx={{ width: "100%",  }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {client.map((data, index) => (
                <TableRow
                  key={data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.username}
                  </TableCell>
                  <TableCell align="right">{data.username}</TableCell>
                  <TableCell align="right">{data.email}</TableCell>
                  <TableCell align="right">{data.phone_number}</TableCell>
                  <TableCell align="right">
                    <Button variant='contained' sx={{
                      backgroundColor:"navy",
                      "&:hover": {
                        color: 'white',
                        backgroundColor: '#232F99'
                      },
                      }}>Detailed View </Button>
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

export default AdminClientsList