import React from "react";
import { TextField } from "@mui/material";
const Address_details = () => {
  return (
    <div>
      <TextField
        id="addressline1"
        label="Address Line 1"
        variant="outlined"
        placeholder="Enter Your"
        name="Address Line 1"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
      <TextField
        id="addressline2"
        label="Address line 2"
        variant="outlined"
        placeholder="Enter Your"
        name="Address line 2"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
      <TextField
        id="city"
        label="City"
        variant="outlined"
        placeholder="Enter Your"
        name="City"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
      <TextField
        id="state"
        label="State"
        variant="outlined"
        placeholder="Enter Your"
        name="State"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
      <TextField
        id="Countryr"
        label="Country"
        variant="outlined"
        placeholder="Enter Your"
        name="Country"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
      <TextField
        id="pincode"
        label="Pin Code"
        variant="outlined"
        placeholder="Enter Your"
        name="Pin Code"
        margin="normal"
        size="small"
       sx={{ m: 1.5, width: '55ch' }}
      />
    </div>
  );
};

export default Address_details;
