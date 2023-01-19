import { Container, minHeight } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ClientApplicationForm = () => {

   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
       setAge(event.target.value);
   };


  return (
    <>
    <Container sx={{border:2, marginTop:3, marginBottom:3, borderColor:"navy", borderRadius:3}} >
        <Typography sx={{marginTop:3, fontSize:35, color:"navy", textAlign:"center"}}>Application</Typography>
        <Box sx={{marginTop:4}}>
            <TextField  sx={{width:"45%", marginLeft:5}}
                required
                id="outlined-required"
                label="Project Name"
                />
            <FormControl sx={{ width:"45%", marginLeft:3 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
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
        </Box>
        <Box sx={{marginTop:4}}>
            <TextField sx={{width:"92%", marginLeft:5}}
            id="filled-textarea"
            label="Project Description"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            />
            <TextField sx={{width:"45%", marginTop:2, marginLeft:3}}
            required
            id="outlined-required"
            label="Completetion Date"
            />
        </Box>
        
    </Container>
        

    </>
  )
}

export default ClientApplicationForm