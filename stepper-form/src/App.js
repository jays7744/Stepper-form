import Stepperform from "./Component/Stepperform";
import {Box, Container,Paper, CssBaseline,} from "@mui/material"
function App() {
  return (
    <>
    <CssBaseline/>
    <Container component={Box} p={4}>
      <Paper component={Box} p={4}>
      <Stepperform />
      </Paper>
    </Container>
   
    </>
    
  );
}

export default App;
