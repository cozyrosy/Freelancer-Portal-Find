import React from 'react'
import Footer from '../Footer'
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
// import InputUnstyled from '@mui/base/InputUnstyled';
// import MultiSelectUnstyled from '@mui/base/MultiSelectUnstyled';


const columns = [
  { field: 'id', headerName: 'SNo. ', width: 130 },
  { field: 'project_name', headerName: 'Project Name', width: 200 },
  { field: 'project_description', headerName: 'Description', width: 300 },
  { field: 'freelancer_name', headerName: 'Freelancer', width: 200 },
  { field: 'project_status', headerName: 'Status', width: 150 },
  { field: 'detailed_view', headerName: 'Action', width: 150 },



  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },

];

const rows = [
  { id: 1, project_name: 'Snow', project_description: 'Jon', freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
  { id: 2, project_name: 'Lannister', project_description: 'Cersei', freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
  { id: 3, project_name: 'Lannister', project_description: 'Jaime', freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
  { id: 4, project_name: 'Stark', project_description: 'Arya', freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
  { id: 5, project_name: 'Targaryen', project_description: 'Daenerys', freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
  { id: 6, project_name: 'Melisandre', project_description: null, freelancer_name: 'Melisandre', project_status: "Completed", detailed_view:"View" },
];
const works = () => {
  return (
<div>
    <Container sx={{marginBottom:10}}>
      <Typography sx={{
        m:4,
        font:"Poppins",
        fontWeight:"25%",
        fontSize:30,
        color:"navy"
      }}>My Works</Typography>
     <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </Container>
    <Footer></Footer>
  </div>
  )
}

export default works