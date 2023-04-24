import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField } from '@mui/material';
import { Link } from 'react-router-dom';




function SignUp() {

return (
<div style={{display:"flex", justifyContent:"center",marginTop:"150px"}}>
        <Card sx={{ width: 345, }}>
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{mb:2, textAlign:"center"}}>
            Signup
        </Typography>
        <TextField id="outlined-basic" type='text' required label="Name" variant="outlined" size="small" fullWidth sx={{mb:2}}/>
        <TextField id="outlined-basic" type='email' required label="Email" variant="outlined" size="small" fullWidth sx={{mb:2}}/>
        <TextField id="outlined-basic" type='password' required label="Password" variant="outlined" size="small" fullWidth />
        
        </CardContent>
        <Typography gutterBottom color="text.secondary"  sx={{textAlign:"center"}}>Already have account ?
        <Link to="/login">Login</Link>
        </Typography>
        <CardActions>
        <Button size="small" fullWidth variant='contained'>signup</Button>
        </CardActions>
    </Card>

</div>
)
}

export default SignUp