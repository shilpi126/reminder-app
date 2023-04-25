import { Card, Typography , Box, TextField, Button, CardContent, CardActions, Checkbox} from '@mui/material'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { collection, addDoc ,getDocs, deleteDoc,updateDoc,doc} from "firebase/firestore"; 
import { db } from '../firebase';


function Home() {
  const [reminderMsg , setReminderMsg ] = useState("")
  const [ remindAt, setRemindAt ] = useState(dayjs('2022-04-17T15:30'))

const [reminderList, setReminderList] = useState([])
 
const [checked, setChecked] = useState(false);



const addReminder = async(e) => {
  e.preventDefault()
 
  try {
    const docRef = await addDoc(collection(db, "reminderDB"), {
      
      reminderMsg: reminderMsg,
      remindAt:remindAt.$d,
      
  })
  setReminderMsg("")
  } catch (e) {
    console.error("Error adding document: ", e.message);
  }


}


    useEffect(() => {
    const getData = async () => {
        const data = await getDocs(collection(db, "reminderDB"));

        setReminderList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))

      }

      getData()
    },[])


  const deleteTask = async(id) =>{
    await deleteDoc(doc(db, "reminderDB", id));

    console.log("task deleted");

  }




  return (
    <Box >
        <Box sx={{display:"flex",justifyContent:"center", alignContent:"center"}}>
        <Card sx={{width:"345px"}}>
          <CardContent>
          <Typography sx={{textAlign:"center"}}>Remind Me </Typography>
          <TextField 
          value={reminderMsg} 
          onChange={(e) => setReminderMsg(e.target.value)}
          fullWidth
          type="text" 
          placeholder="Reminder notes here..." 
          
          />

 <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        
        <DateTimePicker
        
          label="Remind me"
          value={remindAt}
          format="LLL"
          
          onChange={(newValue) => setRemindAt(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider> 

  
      <Button sx={{marginTop:"20px"}} fullWidth onClick={addReminder} variant='contained'>Add Reminder</Button>
        </CardContent>
      </Card>
        </Box>


    <Box sx={{display:"flex",flexWrap:"wrap", justifyContent:"center",alignContent:"center", mt:"60px"}}>
    
      {reminderList?.map((item,i) => (
          <>
      <Card sx={{width:"335px", mb:"40px", ml:"20px"}}>
        <CardContent key={item.id}>
        

          <Typography variant='h5'>{item.reminderMsg}</Typography>
          {/* <Typography>{item.remindAt}</Typography> */}
          
        </CardContent>
        <CardActions>
        
          <Button fullWidth onClick={() => deleteTask(item.id)} variant='contained' >Delete</Button>
        </CardActions>
      </Card>
      </>
      ))}
      </Box>

    </Box>
  )
}

export default Home