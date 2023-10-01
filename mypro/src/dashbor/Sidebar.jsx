import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';
import { AlbumOutlined, Bungalow, ContactEmergency, Dashboard, HomeMax, Image, Inbox, ManageAccounts } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export  const Sidebar=({DrwerOpen,DrowerClose})=> {
    const [SelectMenu,setmenu]=useState('')

  return (
    <>
    
    <Drawer open={DrwerOpen}
     onClose={DrowerClose}>
<Box sx={{width:'300px'}}>
<Box sx={{p:2}}>
<Stack direction={'row'}>
<Box>
<BroadcastOnPersonalIcon sx={{color:'white',background:'primary.dark',fontSize:'35px',height:'30'}}/>
</Box>
<Box>
    <Typography>BELLA CoFFE</Typography>
</Box>
</Stack>
</Box>

{/* <-MENU PAR-> */}
<Box>
    <Box sx={{width:'100%',maxWidth:360,bgcolor:'green'}}>
<nav aria-label='main mailbox folders'>
<List>
    <ListItem disablePadding>
        <ListItemButton>
<ListItemIcon>
<Dashboard/>
</ListItemIcon>
<ListItemText primary='Dashbourd'/>
</ListItemButton>
    </ListItem>

    {/* <-menu list-> */}
    {/* <Link to={'Home'} style={{textDecoration:'none'}}>
        <ListItem disablePadding>
<ListItemButton sx={[SelectMenu === 'home' && {bgcolor:'purple',color:'white',
":host":{
    bgcolor:'primary.main'
}}]} onClick={()=>{
    setmenu('home')
DrowerClose()
}}>

<ListItemIcon>
    <Bungalow sx={[SelectMenu=== 'home' && {color:'white'}]}/>
    <ListItemText primary='home'/> 
</ListItemIcon>
</ListItemButton>
        </ListItem>
    </Link> */}

    <Link to={'Cutomers'} style={{textDecoration:'none'}}>
        <ListItem disablePadding>
<ListItemButton sx={[SelectMenu === 'Cutomers' && {bgcolor:'background.paper',color:'white',
":host":{
    bgcolor:'primary.main'
}}]} onClick={()=>{
    setmenu('Cutomers')
DrowerClose()
}}>

<ListItemIcon>
    <Bungalow sx={[SelectMenu=== 'Cutomers' && {color:'white'}]}/>
    <ListItemText primary='Cutomers'/> 
</ListItemIcon>
</ListItemButton>
        </ListItem>
    </Link>
</List>
</nav>
<Divider/>
    </Box>
</Box>
{/* <-END -- MENU PAR-> */}
</Box>
    </Drawer>

    {/* <big screen></big> */}
    <Box>

<Box sx={{width:'290px',height:'100vh',display:{
   sx:'none',
   md:'block'

},borderRight:2,borderColor:'#eee'}}>



<Box sx={{width:'200px'}}>


<Box sx={{p:4}}>
<Stack direction={"row"} spacing={2}>
<Box>
<Bungalow sx={{height:'30',color:'primary.dark',fontSize:'40px'}}/>
</Box>
<Box>
<Typography variant="h6" sx={{}}>BEllaCoFFE</Typography>
</Box>
</Stack>
</Box>
</Box>

{/* ////////// */}
< Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard/>
              </ListItemIcon>
              <ListItemText primary="Dashbourd" />
            </ListItemButton>
          </ListItem>
          {/* <Link to={'home'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'home' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('home')
            
            }}>
              <ListItemIcon>
                <HomeMax sx={[SelectMenu==='home'&& {color:'white',bgcolor:{
                  bgcolor:'primary.main'
                }}]}/>
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItemButton>
          </ListItem>
          </Link> */}

          <Link to={'Product'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'Product' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('Product')
           
            }}>
              <ListItemIcon>
                <Image sx={[SelectMenu==='Product'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'Cutomers'} style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'Cutomers' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('Cutomers')
             
            }}>
              <ListItemIcon>
                <Inbox  sx={[SelectMenu==='Cutomers'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="Cutomers" />
            </ListItemButton>
          </ListItem>
          </Link>

         

          <Link to={'service'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'service' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('service')
             
            }}>
              <ListItemIcon>
                <ManageAccounts sx={[SelectMenu==='service'&& {color:'white'}]}/>
              </ListItemIcon >
              <ListItemText primary="service" />
            </ListItemButton>
          </ListItem>
          </Link>
        
          {/* <Link to={'About'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'About' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('About')
           
            }}>
              <ListItemIcon>
                <AlbumOutlined sx={[SelectMenu==='About'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          </Link> */}
       
          <Link to={'Contacts'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'Contacts' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
              setmenu('Contacts')
         
            }}>
              <ListItemIcon>
                <ContactEmergency sx={[SelectMenu==='Contacts' && {color:'white'}]} />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
          </Link>
         
          <Link to={'users'}  style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton sx={[SelectMenu === 'users' && {bgcolor:"primary.main",color:'white',":hover":{
              bgcolor:'primary.main'

            }}]}
            onClick={()=>{
                setmenu('users')
          
            }}>
              <ListItemIcon>
                <Image sx={[SelectMenu==='users'&& {color:'white'}]}/>
              </ListItemIcon>
              <ListItemText primary="users" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
      </nav>
      <Divider />
{/* {list menu end} */}

      {/* {big screen sixe} */}
   
   
</Box>
</Box>
    </Box>
    </>
  )
}
