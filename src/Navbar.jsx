import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';

const pages = ['Home', 'About', 'Roadmap', 'Team', 'Whitepaper'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
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
                    {pages.map((page) => (
                    <Box
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, mx:3, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Box>
                    ))}
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
  );
};
export default Navbar;