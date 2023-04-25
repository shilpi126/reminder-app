import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField } from '@mui/material';
import {  Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { useNavigate } from 'react-router-dom';



function SignUp() {
   

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
//  const [loading, setLoading] = useState(false)
//  const [error, setError] = useState("")
const {signup} = useContext(AuthContext);
const navigate = useNavigate()


 const handleClick = async () => {
    
    console.log(email);
    console.log(password);
    try{
        const userObj = await signup(email, password) 
        
        console.log("success");
        navigate("/login")
        }catch(e){
        
        console.log("error ==> " ,e);
    }

 }


return (
<div style={{display:"flex", justifyContent:"center",marginTop:"150px"}}>
        <Card sx={{ width: 345, }}>
      
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{mb:2, textAlign:"center"}}>
            Signup
        </Typography>
        <TextField 
        id="outlined-basic" 
        type='text' 
        required label="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined" 
        size="small" 
        fullWidth 
        sx={{mb:2}}/>
        <TextField 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic" 
        type='email' 
        
        required label="Email" 
        variant="outlined" 
        size="small" 
        fullWidth 
        sx={{mb:2}}/>
        <TextField 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic" 
        type='password' 
        required 
        label="Password" 
        variant="outlined" 
        size="small" 
        fullWidth />
        
        </CardContent>
        <Typography gutterBottom color="text.secondary"  sx={{textAlign:"center"}}>Already have account ?
        <Link to="/login"> Login</Link>
        </Typography>
        <CardActions>
        <Button onClick={handleClick}  size="small" fullWidth variant='contained'>signup</Button>
        </CardActions>
        
    </Card>

</div>
)
}

export default SignUp