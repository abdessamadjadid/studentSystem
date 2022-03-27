import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Student() {

const paperStyle ={padding:'50px 20px', width:600,margin:"20px auto"}
const[name,setName] = React.useState('')
const [address,setAddress] = React.useState('');
//const classes = React.useStyles('');


const handleClick=(e)=>
{
    e.preventDefault()
    const student={name,address}
    console.log(student)
}


  return (
      <Paper elevation={3} style={paperStyle}>
        <h1>Add Student</h1>

            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
        
    </Paper>
  );
}
