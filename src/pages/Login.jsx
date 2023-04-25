import React, {useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField } from '@mui/material';
import  { Link } from 'react-router-dom'


import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth';


function Login() {
 
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const {login} = useContext(AuthContext)
 const navigate = useNavigate()

 const handleClick = async () => {
    
    console.log(email);
    console.log(password);
    try{
        const userObj = await login(email, password) 
        
        console.log("login successfully");
        navigate("/")
        }catch(e){
        
        console.log("error => " ,e);
    }

 }




return (
    <div style={{display:"flex", justifyContent:"center",marginTop:"150px"}}>
        <Card sx={{ width: 345, }}>
        
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{mb:2, textAlign:"center"}}>
            Login
        </Typography>
        
        <TextField 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic" type='email' required label="Email" variant="outlined" size="small" fullWidth sx={{mb:2}}/>
        <TextField 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic" type='password' required label="Password" variant="outlined" size="small" fullWidth />
        
        </CardContent>
        <Typography gutterBottom color="text.secondary"  sx={{textAlign:"center"}}>Don't have account ?
        <Link to="/signup">Signup</Link>
            
        </Typography>
        <CardActions>
        <Button onClick={handleClick} size="small" fullWidth variant='contained'>Login</Button>
        </CardActions>
        
        </Card>

    </div>
    )
}

export default Login