import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Sidebar } from './Sidebar';
export default function Dashbourd() {

    const[drowperopen,setdroweropen]=useState(false)
    const togledrow=()=>{
        setdroweropen(!drowperopen)
    }
  return (
  <Box>
    <Stack direction={'row'}>
<Sidebar drowperopen={drowperopen} DrowerClose={togledrow}/>


        {/* <--content page-> */}
        <Box sx={{width:'100%'}}>
<Box sx={{bgcolor:'primary.ruwa',color:'white',
display:'flex',
justifyContent:{
    sx:'space-between',
    md:'end'
}}}p={2}>
    <IconButton sx={{p:0, display:{
sx:'block',
md:'none'
    }}} onClick={()=>togledrow}>
        <MenuIcon sx={{color:'white'}}/>
    </IconButton>

<Stack direction={'row'} spacing={2}>
<Typography>
    User: {" "} ruwa
</Typography>
</Stack>
</Box>
        </Box>
           {/* <-end-content page-> */}
    </Stack>
  </Box>
  )
}
