import React, { useState } from 'react'
import {Stepper, Step, StepLabel, Button, Typography, } from "@mui/material"
import User_info from './Form/User_info';
import Address_details from "./Form/Address_details"

const Stepperform = () => {
  const [activeStep, setActiveStep]= useState(0);

  const handleNext = ()=>{
    setActiveStep(activeStep + 1)
  };

  const handleBack = ()=>{
    setActiveStep(activeStep - 1)
  };

  const getSteps = (step)=>{
    switch(step){
    case 0 : return(<User_info/>);
    case 1 : return(<Address_details/>);
  
    default : return "Unknown Step"
    }}

  return (
    <>
      <div>
        <Stepper activeStep={activeStep} alternativeLabel >
          <Step>
            <StepLabel>USER INFORMATION</StepLabel>
          </Step>
          <Step>
            <StepLabel>ADDRESS DETAILS</StepLabel>
          </Step>
          <Step>
            <StepLabel>Thank You</StepLabel>
          </Step>
        </Stepper>

        {activeStep === 2 ? (
          <Typography variant="h3" align="center">
          
            Data Added Successfully
          </Typography>
        ) : (
          <>
            <form>{getSteps(activeStep)}</form>
            <Button
              variant="contained"
              onClick={handleBack}
              color="primary"
              disabled={activeStep === 0}
              sx={{m:1}}
            >
              Back
            </Button>
            <Button variant="contained" onClick={handleNext} color="primary">
             Next
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default Stepperform;