// mui imports
import {
    Box,
    Drawer,
    Link,
    List,
    ListItem,
    // ListItemButton,
    // ListItemIcon,
    ListItemText
} from '@mui/material';

interface DrawerProps {
    open: boolean;
    onToggle: ()=>void;
}

const drawerItems = [
        {name: 'Services', href: '/'},
        {name: 'Women Care', href: '/'}, 
        {name: 'Women', href: '/'}, 
        {name: 'Promotions', href: '/'},
        {name: 'Policies', href: ''},
        {name: 'About Us', href: ''}
    ] 
    
const TopDrawer = ( drawer: DrawerProps) => {
    


  return (
    <Drawer
    anchor="top"
    open={drawer.open}
    onClose={drawer.onToggle}
    sx={{ '& .MuiDrawer-paper': {
        backgroundImage: 'none', 
        // width: '', 
        height:'50%', 
        // borderRadius: '50% 0 50% 50%',
        justifyContent: 'center',
        alignItems:'center'
    } 
    }}
    >
    <Box
        sx={{
        width: 'auto',
        '& .MuiListItem-root': {
            fontSize: '1rem',
            minWidth: 28,
            justifyContent: 'center',
        }
        }}
        role="presentation"
        onClick={drawer.onToggle}
        onKeyDown={drawer.onToggle}
    >
        <List>
            {/* Language Toggle button */}
            {/* <IconButton
                component={RouterLink}
                to="/login"
                // onClick={handleToggle}
              >
                <FontAwesomeIcon icon={faLanguage}  style={{ fontSize: 20 }} color="primary" />
            </IconButton> */}

            {drawerItems.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Link 
                        style={{ textDecoration: 'none'}} 
                        href={item.href} 
                        >
                            <ListItemText primary={item.name} 
                                primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }} />
                        </Link>
                    </ListItem>
                )
            })}
        </List>
    </Box>
    </Drawer>
  )
}

export default TopDrawer;