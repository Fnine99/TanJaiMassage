import { Link as RouterLink } from 'react-router-dom';

import { Fragment } from 'react';

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
  // Fade,
  // useMediaQuery,
  useScrollTrigger,
  CssBaseline,
} from '@mui/material';

// project imports
// import Drawer from 'layout/components/Drawer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
// import { link } from 'fs';

interface Props {
  window? : ()=> Window;
  // children? : ReactElement;
}

// function ScrollEvents(props: Props){
//   const {children, window} = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });
//   return(
//     <Fade in={!trigger}>
//       {children}
//     </Fade>
//   )
// }


const Header = (props:Props) => {
  const {window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis:true,
    threshold: 20
  });

  const linkItems = [
    {name: 'Services', href: '/services'},
    {name: 'Women Care', href: '/women'}, 
    {name: 'Pricing', href: '/pricing'},
    // {name: 'Meet The Team!', href: '/team'},
    // {name: 'About Us', href: '/about-us'}
  ] 

  // const [drawerToggle, setDrawerToggle] = useState(false);

  // const handleDrawerToggle = (prop: Props) => {
  //   return setDrawerToggle(!drawerToggle)
  // }

  return (
    <Fragment>
    <CssBaseline>
    {/* <ScrollEvents {...props}> */}
      <AppBar 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: trigger? '0 0 0 1': 'none', 
          height: trigger? 65:80, 
        }}
      >
        <Grid 
          container 
          sx={{
            width:'100%',
            height: '100%',
            maxHeight: 50, 
            px: { xs: 1.5, md: 0, lg: 0 }, 
            pb: 0,
            alignItems: 'center'
          }}
        >
          
          <Grid item xs={4}>

            <Box sx={{ display: 'flex', flexDirection: 'row', pl: 4 }}>
              <IconButton
                href='shop'
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2}}>
              {linkItems.map((link, key)=>{
                return (
                  <Link 
                    className="header-link" 
                    color="black"
                    component="a"
                    href={link.href}
                    underline="hover"
                    key={key}
                    sx={{pr: 4 }}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </Box>
          </Grid>

        </Grid>
      </AppBar>
     {/* </ScrollEvents> */}
     </CssBaseline>
     </Fragment>
  );
};
export default Header