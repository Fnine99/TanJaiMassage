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
  // Stack,
  ButtonBase,
  Typography,
  IconButton,
  Grid,
  // useMediaQuery,
  // useScrollTrigger
} from '@mui/material';

// project imports
import Drawer from 'layout/components/Drawer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShop, faSquarePhone } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [drawerToggle, setDrawerToggle] = useState(false);

  const handleDrawerToggle = () => {
    return setDrawerToggle(!drawerToggle)
  }

  return (
    
    // <ElevationScroll layout={layout} {...others}>
      <AppBar sx={{ backgroundColor: 'lightblue', boxShadow: 'none', height: 50 }}>
        <Grid 
          container 
          sx={{
            width:'100%',
            height: '100%',
            maxHeight: 50 , 
            px: { xs: 1.5, md: 0, lg: 0 }, 
            pb: 0,
            alignItems: 'center'
          }}
        >
          
          <Grid item xs={4}>

            <Box sx={{ display: 'flex', flexDirection: 'row', pl: 4 }}>
              <IconButton
                component={RouterLink}
                to="/shop"
                // onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faShop} style={{ fontSize: 20 }} color="primary"/>
              </IconButton>

              {/* Contact button */}
              <Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
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
                  color="black"
                  component="a"
                  href="/#features"
                  underline="none"
                >
                  514-555-5555
                </Link>
              </Box>
            </Box>

          </Grid>


          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonBase href="/">
                <Typography color={"black"}>Logo</Typography>
                {/* <img src={logo} alt=''width='75px' height='45px' /> */}
              </ButtonBase>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 4}}>
              <IconButton
                onClick={handleDrawerToggle}
              >
                <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} color="primary"/>
              </IconButton>
            </Box>
          </Grid>

        </Grid>
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
      </AppBar>
    // </ElevationScroll>
  );
};
export default Header