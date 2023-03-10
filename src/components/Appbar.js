import * as React from 'react';

import { MenuItem, Menu, AppBar, Container, Toolbar, Typography, Box, IconButton, Button, Tooltip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Contact',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
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
  const user = true;
  return (
    <AppBar position="static" sx={{ background: 'red' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              // color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
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

              <MenuItem>
                <Typography textAlign="center">Home</Typography>
                <Typography textAlign="center">About</Typography>
                <Typography textAlign="center">Write</Typography>
                <Typography textAlign="center">Contact</Typography>
                <Typography textAlign="center">Logout</Typography>

              </MenuItem>

              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'inherit',
              color: 'black',

              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>

            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>

              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>

              <Link to='/write' style={{ textDecoration: 'none', color: 'inherit' }}>Write</Link>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>

              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>

              {/* <Link to='/' style={{textDecoration:'none', color:'inherit'}}>Logout</Link> */}
              {user && "Logout"}
            </Button>

            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>



          {user ? (<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={require("./images.jpg")} /> 
              </IconButton>
            </Tooltip>    <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>) :
            <>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>
                <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.4rem' }}>
                <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
              </Button>
            </>
          }


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;