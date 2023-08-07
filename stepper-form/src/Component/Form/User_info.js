import { TextField, FormControl,FormLabel,RadioGroup,FormControlLabel ,Radio,DatePicker, InputLabel, Select, MenuItem} from "@mui/material";
import { useState } from "react";

const User_info = ()=>{

  const [userInput, setUserInput] = useState({
    firstName : "",
    middleName : "",
    lastName : "",
    mobileNo : "",
  });
   
  const handleInput = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
     console.log(value, name)
     setUserInput({...userInput, [name] : value })
  };

    return( <>
<TextField 
id="firstName"
label="First Name"
variant="outlined"
value={userInput.firstName}
name="firstName"
margin="normal"
size='small'
sx={{ m: 1.5, width: '55ch' }}
onChange={handleInput}
/>
<TextField 
id="middleName"
label="Middle Name"
variant="outlined"
value={userInput.middleName}
name="middleName"
margin="normal"
size='small'
sx={{ m: 1.5, width: '55ch' }}
onChange={handleInput}
/>
<TextField 
id="lastName"
label="Last Name"
variant="outlined"
value={userInput.lastName}
name="lastName"
size='small'
sx={{ m: 1.5, width: '55ch' }}
onChange={handleInput}
/>
<TextField 
id="mobileNo"
label="Mobile No"
variant="outlined"
value={userInput.mobileNo}
name="mobileNo"
size='small'
sx={{ m: 1.5, width: '55ch' }}
onChange={handleInput}
/> 
 <TextField 
id="email"
label="Email"
variant="outlined"
name="Email"
size='small'
sx={{ m: 1.5, width: '55ch' }}
/>  
 <TextField 
id="birthday"
label="Birthday"
variant="outlined"
name="Birthday"
size='small'
sx={{ m: 1.5, width: '55ch' }}

/>  

 <TextField 
id="age"
label="Age"
variant="outlined"
name="Age"
size='small'
sx={{ m: 1.5, width: '55ch' }}
/> 
<TextField 
id="bloodgroup"
label="Blood Group"
variant="outlined"
name="Blood Group"
size='small'
sx={{ m: 1.5, width: '55ch' }}
/> <TextField 
id="height"
label="Height"
variant="outlined"
name="Height"
size='small'
sx={{ m: 1.5, width: '55ch' }}
/> 
<TextField 
id="weight"
label="Weight"
variant="outlined"
name="Weight"
size='small'
sx={{ m: 1.5 , width: '55ch' }}
/> 
<FormControl sx={{ m: 1.5 , width: '55ch' }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
</FormControl> 

<FormControl sx={{ m: 1.5 , width: '55ch' }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Single" control={<Radio />} label="Single" />
        <FormControlLabel value="Married" control={<Radio />} label="Married" />
        <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
        <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
      </RadioGroup>
</FormControl>
</>)}

export default User_info;
