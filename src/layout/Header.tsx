import { Link as RouterLink } from 'react-router-dom';

import { useState } from 'react';

// project imports
// import logo from 'assets/logo.svg'

// mui imports
import {
  AppBar,
  Box,
  // Button,
  // Container,
  Link,
  Stack,
  ButtonBase,
  Typography,
  IconButton,
  // useMediaQuery,
  // useScrollTrigger
} from '@mui/material';

// project imports
import Drawer from 'layout/components/Drawer'

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
              <Drawer open={drawerToggle} onToggle={handleDrawerToggle}/>
            </Box>
          </Box>
       </AppBar>
    // </ElevationScroll>
  );
};
export default Header