import "./App.css";
import { Container,Text,Box ,Button,Input} from '@chakra-ui/react'
import React from "react";
import {useSelector,useDispatch} from "react-redux";
import{ incNumber,DecNumber} from './action/index'
function App() {

  const mystate=useSelector((state)=> state.changeNumber)
  const dispatch=useDispatch();
  return (<>

  <Container h='100%' w='100%' display='flex' flexDirection='column' justifyContent='center'>

    <Text   pt={6}  as='p' fontSize='3xl' >Increment / Decrement operator</Text>
    <Box w='100%' display="flex" flexDirection='row' pt={4} justifyContent='center'>
      <Button onClick={()=>dispatch(incNumber())}  >+</Button>
      <Input   placeholder="0" mr='19'   ml='19' value={mystate}></Input>
      <Button onClick={()=>dispatch(DecNumber())}>- </Button>
  

    </Box>



  </Container>


  </>
  );
}

export default App;
