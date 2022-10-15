import { Link as RouterLink } from 'react-router-dom';

// project imports
import logo from 'assets/logo.svg'

// mui imports
import {
  AppBar,
  // useMediaQuery,
  Box,
  // Button,
  Chip,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  // Typography,
  ButtonBase,
  // IconButton
  // useScrollTrigger
} from '@mui/material';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  return (
    // <ElevationScroll layout={layout} {...others}>
      <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none' }}>
        <Container disableGutters>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 0 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <ButtonBase href="/">
                <img src={logo} alt=''width='75px' height='45px' />
              </ButtonBase>
            </Stack>
            <Stack
              direction="row"
              sx={{
                '& .header-link': { px: 1, '&:hover': { color: 'pink' } },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={2}
            >
              <Link 
                className="header-link" 
                color="white" 
                component="a"
                href="/#features"
                underline="none"
              >
                Features
              </Link>
              <Link 
                className="header-link" 
                color="white" 
                component="a"
                href="/#Features"
                // target="_blank" 
                underline="none"
              >
                Data
              </Link>
              <Link
                className="header-link"
                color={'white'}
                component={RouterLink}
                to="/components-overview/buttons"
                underline="none"
              >
                Pricing
              </Link>
              <Link className="header-link" color="white" href="https://codedthemes.gitbook.io/mantis/" target="_blank" underline="none">
                About
              </Link>
              <Box sx={{ display: 'inline-block' }}>
                {/* <AnimateButton>
                  <IconButton
                    component={RouterLink}
                    to="/login"
                    // onClick={handleToggle}
                  >
                    <UserOutlined  style={{ fontSize: 20 }} color="primary" />
                  </IconButton>
                </AnimateButton> */}
              </Box>
              <Box sx={{ display: 'inline-block' }}>
                {/* <AnimateButton>
                  <Button
                    component={RouterLink}
                    to="/register"
                    disableElevation
                    color="primary"
                    variant="contained"
                  >
                    Get started
                  </Button>
                </AnimateButton> */}
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
              {/* <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography> */}
              <Stack direction="row" spacing={2}>
                {/* replace by islogin? */}
                {/* {layout === 'component' && (
                  <Button
                    variant="outlined"
                    size="small"
                    color="warning"
                    component={RouterLink}
                    to={config.defaultPath}
                    sx={{ mt: 0.5, height: 28 }}
                  >
                    Dashboard
                  </Button>
                )} */}
                {/* {layout !== 'component' && (
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    component={RouterLink}
                    to="/register"
                    sx={{ mt: 0.5, height: 28 }}
                  >
                    Get started
                  </Button>
                )} */}
{/* 
                <IconButton
                  color="secondary"
                  {...(layout === 'component' ? { onClick: handleDrawerOpen } : { onClick: drawerToggler(true) })}
                  sx={{
                    '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.lighter' : 'secondary.dark' }
                  }}
                >
                  <MenuOutlined style={{ color: 'inherit' }} />
                </IconButton> */}
              </Stack>
              <Drawer
                anchor="top"
                // open={drawerToggle}
                // onClose={drawerToggler(false)}
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
                  // onClick={drawerToggler(false)}
                  // onKeyDown={drawerToggler(false)}
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
          </Toolbar>
        </Container>
      </AppBar>
    // </ElevationScroll>
  );
};
export default Header