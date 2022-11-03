import { Link as RouterLink } from 'react-router-dom';

import { useState } from 'react';

// project imports
// import logo from 'assets/logo.svg'

// mui imports
import {
  AppBar,
  Box,
  // Button,
  Chip,
  // Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  ButtonBase,
  Typography,
  IconButton,
  // useMediaQuery,
  // useScrollTrigger
} from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShop, faSquarePhone, faLanguage } from '@fortawesome/free-solid-svg-icons';
const Header = () => {

  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    return setDrawerToggle(!drawerToggle)
  }

  return (
    
    // <ElevationScroll layout={layout} {...others}>
      <AppBar sx={{bgcolor: 'gray', boxShadow: 'none' }}>
          <Box sx={{width:'100%', px: { xs: 1.5, md: 0, lg: 0 }, pb: 0 }}>

            <Stack
              direction="row"
              sx={{
                flexGrow: 1,
                '& .header-link': { px: 1, '&:hover': { color: 'lightgreen' } },
                // display: { xs: 'none', md: 'block' }
              }}
              // spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row">
                {/* Shop button */}
                <Box sx={{ display: 'inline-block' }}>
                  <IconButton
                    component={RouterLink}
                    to="/shop"
                    // onClick={handleToggle}
                  >
                    <FontAwesomeIcon icon={faShop} style={{ fontSize: 20 }} color="primary"/>
                  </IconButton>
                </Box>

                {/* Contact button */}
                <Box sx={{ display: 'inline-block' }}>
                  <IconButton
                    component={RouterLink}
                    to="/login"
                    // onClick={handleToggle}
                  >
                    <FontAwesomeIcon icon={faSquarePhone} style={{ fontSize: 20 }} color="primary"/>
                  </IconButton>
                  {/* Number Link */}
                  <Link 
                    className="header-link" 
                    // color="white"
                    component="a"
                    href="/#features"
                    underline="none"
                  >
                    514-555-5555
                  </Link>
                </Box>

                {/* Language Toggle button */}
                <Box sx={{ display: 'inline-block' }}>
                  <IconButton
                    component={RouterLink}
                    to="/login"
                    // onClick={handleToggle}
                  >
                    <FontAwesomeIcon icon={faLanguage}  style={{ fontSize: 20 }} color="primary" />
                  </IconButton>
                </Box>
              </Stack>              

              {/* Logo */}
              <Box>
                <ButtonBase href="/">
                  <Typography color={"pink"}>Logo</Typography>
                  {/* <img src={logo} alt=''width='75px' height='45px' /> */}
                </ButtonBase>
              </Box>
              
              {/* Hamburger */}
              <Box sx={{ display: 'inline-block' }}>
                <IconButton
                  onClick={handleDrawerToggle}
                >
                  <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} color="primary"/>
                </IconButton>
              </Box>

            </Stack>

            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={handleDrawerToggle}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 28
                    }
                  }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    <Link style={{ textDecoration: 'none' }} href="#Features">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="Features" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#Features">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="Data" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                      </ListItemButton>
                    </Link>
                    <Link
                      style={{ textDecoration: 'none' }} href="#Features">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="Pricing" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/">
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="About" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/login" >
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="Log in" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="/register" >
                      <ListItemButton component="span">
                        <ListItemIcon>
                          {/* <LineOutlined /> */}
                        </ListItemIcon>
                        <ListItemText primary="Start your free trial" primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                        <Chip color="primary" label="v1.0" size="small" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Box>
       </AppBar>
    // </ElevationScroll>
  );
};
export default Header