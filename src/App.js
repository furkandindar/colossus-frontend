import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Fade from 'react-reveal/Fade';
import { Stack, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useRef } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const pages = ['Home', 'About', 'Roadmap', 'Team', 'Whitepaper'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function App() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const roadmapRef = useRef(null);
  const teamRef = useRef(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Grid container height={"100vh"} sx={{position:"relative"}}>
      <Grid ref={homeRef} item sx={{zIndex:10}} xs={12}>
      <AppBar position="static"  sx={{background:"transparent", boxShadow:"none"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Grid container>
              <Grid item container alignItems={"center"} xs={12}>
                <Box
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <img src="logo-md.png" width={"131px"}/>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                {/* <Box
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <img src="logo-md.png" width={"100px"}/>
                </Box> */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center" }}>
                    {/* {pages.map((page) => (
                    <Box
                        key={page}
                        onClick={()=> {aboutRef.current.scrollIntoView({behavior:"smooth"})}}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Box>
                    ))} */}
                    <Box
                        onClick={()=> {homeRef.current.scrollIntoView({behavior:"smooth"})}}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block', cursor:"pointer" }}
                    >
                        Home
                    </Box>
                    <Box
                        onClick={()=> {aboutRef.current.scrollIntoView({behavior:"smooth"})}}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block', cursor:"pointer" }}
                    >
                        About
                    </Box>
                    <Box
                        onClick={()=> {roadmapRef.current.scrollIntoView({behavior:"smooth"})}}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block', cursor:"pointer" }}
                    >
                        Roadmap
                    </Box>
                    <Box
                        onClick={()=> {teamRef.current.scrollIntoView({behavior:"smooth"})}}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block', cursor:"pointer" }}
                    >
                        Team
                    </Box>
                    <a href="https://docs.colossus.studio/" target={"_blank"} style={{textDecoration:"none"}}>
                    <Box
                        sx={{ my: 2, mx:3, color: 'white', display: 'block' }}
                    >
                        Whitepaper
                    </Box>
                    </a>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Stack direction={"row"} spacing={1} height={25}>
                        <a href='https://colossusstudio.medium.com'>
                            <img width={25} src='soc-1.webp' alt='medium'/>
                        </a>
                        <a href='https://twitter.com/colossusAR'>
                            <img width={25} src='soc-2.webp' alt='twitter'/>
                        </a>
                        <a href='https://discord.com/invite/rf686eGR'>
                            <img width={25} src='soc-4.webp' alt='discord'/>
                        </a>
                        <a href='https://t.me/colossusAR'>
                            <img width={25} src='soc-3.webp' alt='telegram'/>
                        </a>
                    </Stack>
                </Box>
              </Grid>
              <Grid item container xs={12}>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:"center" }}
                >
                    <img src="logo-md.png" width={"100px"}/>
                </Box>
              </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
      </Grid>
      {/* <Grid item xs={12} position={"fixed"} sx={{background:"red", zIndex:20, top:"50%", transform:"translateY(-50%)", right:"4rem"}} >
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      </Grid> */}
      <Grid item width={matches ? "100vw" : "auto"} height={matches ? "auto" : "100vh"} sx={{position:"fixed", top:0, left:"50%", transform:"translateX(-50%)", zIndex:1}} >
        <video width={matches ? "100%" : "auto"} height={"100%"} style={{verticalAlign:"baseline", objectFit:"contain", transform:"none", transition:"all 0.3s ease", margin:0,padding:0,border:0,outline:0,background:"transparent",}} src='Colossus-Lab-V2-1.mp4' playsInline autoPlay preload='' muted loop></video>
      </Grid>
      <Grid item height={"100vh"} xs={12}></Grid>
      <Grid ref={aboutRef} item container justifyContent={"center"} xs={12} sx={{zIndex:10, backgroundColor:"black",position:"relative"}} pt={3}>
        <Grid item container justifyContent={"center"} xs={12} md={5}>
          <Fade bottom appear>
            <img style={{width:"100%", height:"auto"}} src="logo-md.png"/>
          </Fade>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12}>
          <Fade bottom appear>
            <Typography>A creative organization that combines augmented reality with digital fashion, NFT, and blockchain to produce various designs.</Typography>
          </Fade>
        </Grid>
        <Grid item xs={11} md={6}>
          <Fade bottom >
            <Typography align='center' variant={matches ? "h5" : "subtitle1"} sx={{color:"white"}}>A creative organization that combines augmented reality with digital fashion, NFT, and blockchain to produce various designs.</Typography>
          </Fade>
        </Grid>
        <Grid item container xs={12} justifyContent={"space-evenly"}>
          <Grid item xs={12} md={6}>
            <video width={"100%"} src='about-1.mp4' playsInline autoPlay preload='' muted loop></video>
          </Grid>
          <Grid item container alignItems={"center"} xs={12} md={4}>
            <Stack spacing={2} justifyContent={"flex-end"}>
              <Fade right >
                <Typography variant='h5' sx={{color:"white"}}>A NEW ERA OF NFTS</Typography>
              </Fade>
              <Fade right >
                <Typography sx={{color:"white"}}>Colossus aims to bring a new perspective to the designs of NFT markets. The drops we created will be able to be viewed by users with AR technology. The collectibles you have will not "only" be visible in your MetaMask wallet, but also you can examine the artworks you owned more closely and show them around you in a more creative and interactive way. In the future, we are working to present these AR designs to our users with the help of Instagram and Snapchat filters.</Typography>
              </Fade>
            </Stack>
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent={"space-evenly"}>
          <Grid item  alignItems={"center"} xs={12} md={4}>
            <Stack spacing={2} justifyContent={"flex-end"}>
              <Fade left >
                <Typography variant='h5' sx={{color:"white"}}>AUGMENTED REALITY</Typography>
              </Fade>
              <Fade left >
                <Typography sx={{color:"white"}}>It's stated previously that AR technology has a bright and undeniable future. Colossus aims to bring a new perspective to the designs of NFT markets. The drops we created will be able to be viewed by users with AR technology. The collectibles you have will not "only" be visible in your MetaMask wallet, but also you can examine the artworks you owned more closely and show them around you in a more creative and interactive way. In the future, we are working to present these AR designs to our users with the help of Instagram and Snapchat filters.</Typography>
              </Fade>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <video width={"100%"} src='about-2.mp4' playsInline autoPlay preload='' muted loop></video>
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent={"space-evenly"}>
          <Grid item xs={12} md={6}>
            <img style={{maxWidth:"100%", height:"auto"}} src="logo-about.webp"/>
          </Grid>
          <Grid item container alignItems={"center"} xs={12} md={4}>
            <Stack spacing={2} justifyContent={"flex-end"}>
              <Fade right >
                <Typography variant='h5' sx={{color:"white"}}>ColLab</Typography>
              </Fade>
              <Fade right >
                <Typography sx={{color:"white"}}>ColLAB is the laboratory where Colossus studios can collaborate in real and virtual world partnerships. With the opportunity of these collaborations, we aim to launch merchandise products with the companies we agreed in the future, and we want to give priority to NFT collectible owners for the release of these products. In the virtual world, we aim to create mixed drops by making agreements with other NFT projects. Throughout all these ColLAB phases, we will give our holders a priority.</Typography>
              </Fade>
            </Stack>
          </Grid>
        </Grid>
        <Grid ref={roadmapRef} item container xs={12} justifyContent={"center"} pb={15}>
          <Timeline sx={{color:"white"}} position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{backgroundColor:"white",margin:0, width:"3px", height:"3px"}}/>
                <TimelineConnector sx={{backgroundColor:"white", height:"35vh", width:"4px"}}/>
              </TimelineSeparator>
                <TimelineContent>
                  <Fade >
                    <Stack my={-2}>
                      <Typography pb={2} variant='h6'>2022 Q2</Typography>
                      <Typography variant='body2'>Social Media Release</Typography>
                      <Typography variant='body2'>Website Release</Typography>
                      <Typography variant='body2'>Partnerships</Typography>
                      <Typography variant='body2'>Collectibles Mint Event</Typography>
                      <Typography variant='body2'>Launch Augmented Reality App</Typography>
                    </Stack>
                  </Fade>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:"white",margin:0, width:"3px", height:"3px"}}/>
                <TimelineConnector sx={{backgroundColor:"white", height:"35vh", width:"4px"}}/>
              </TimelineSeparator>
              <TimelineContent>
                  <Fade >
                  <Stack my={-2}>
                      <Typography pb={2} variant='h6'>2022 Q3</Typography>
                      <Typography variant='body2'>DAO Launch</Typography>
                      <Typography variant='body2'>ColLab Launch</Typography>
                      <Typography variant='body2'>Collaborations</Typography>
                      <Typography variant='body2'>Early access to new packages</Typography>
                    </Stack>
                  </Fade>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{backgroundColor:"white",margin:0, width:"3px", height:"3px"}}/>
                <TimelineConnector sx={{backgroundColor:"white", height:"35vh", width:"4px"}}/>
              </TimelineSeparator>
              <TimelineContent>
                  <Fade >
                  <Stack my={-2}>
                      <Typography pb={2} variant='h6'>2022 Q4</Typography>
                      <Typography variant='body2'>Wearable NFTs</Typography>
                      <Typography variant='body2'>Fashion industry collaborations</Typography>
                    </Stack>
                  </Fade>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:"white",margin:0, width:"3px", height:"3px"}}/>
                <TimelineConnector sx={{backgroundColor:"white", height:"35vh", width:"4px"}}/>
              </TimelineSeparator>
              <TimelineContent>
                  <Fade >
                  <Stack my={-2}>
                      <Typography pb={2} variant='h6'>2023 Q1</Typography>
                      <Typography variant='body2'>Creating augmented reality homes</Typography>
                      <Typography variant='body2'>Customizable augmented reality NFTs</Typography>
                    </Stack>
                  </Fade>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
              <TimelineDot sx={{backgroundColor:"white",margin:0, width:"3px", height:"3px"}}/>
              </TimelineSeparator>
              <TimelineContent>
                  <Fade >
                  <Stack my={-2}>
                      <Typography pb={2} variant='h6'>2023 Q3</Typography>
                      <Typography variant='body2'>Will be announced soon..</Typography>
                    </Stack>
                  </Fade>
                </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid ref={teamRef} item container xs={12}>
          <Grid item container xs={6} md={3} position="relative">
            <img src='author-1-md.png' width={"100%"}/>
            <Box p={2} width={"60%"} maxWidth={"24.5rem"} position="absolute" bottom={"-2rem"} backgroundColor="#282626" zIndex={2}>
              <Stack spacing={1}>
                <Typography sx={{color:"white"}} variant='h5'>Quadratus</Typography>
                <Typography sx={{color:"white"}}>3D Artist</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item container xs={6} md={3} position="relative">
          <img src='author-2-md.png' width={"100%"}/>
          <Box p={2} width={"60%"} position="absolute" bottom={"-2rem"} backgroundColor="#282626" zIndex={2}>
              <Stack spacing={1}>
                <Typography sx={{color:"white"}} variant='h5'>Argus</Typography>
                <Typography sx={{color:"white"}}>Project Manager</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item container xs={6} md={3} position="relative">
          <img src='author-3-md.png' width={"100%"}/>
          <Box p={2} width={"60%"} position="absolute" bottom={"-2rem"} backgroundColor="#282626" zIndex={2}>
              <Stack spacing={1}>
                <Typography sx={{color:"white"}} variant='h5'>Avion</Typography>
                <Typography sx={{color:"white"}}>Creative Dev</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item container xs={6} md={3} position="relative">
          <img src='author-4-md.png' width={"100%"}/>
          <Box p={2} width={"60%"} position="absolute" bottom={"-2rem"} backgroundColor="#282626" zIndex={2}>
              <Stack spacing={1}>
                <Typography sx={{color:"white"}} variant='h5'>Phaedra</Typography>
                <Typography sx={{color:"white"}}>Blockchain Dev</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} height={"40vh"}></Grid>
      <Grid item container xs={12} justifyContent={"center"} sx={{zIndex:10, backgroundColor:"black",position:"relative"}} py={3}>
        <Typography variant="body2" sx={{color:"white"}}>© 2022 by Colossus Studio terms and conditions</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
