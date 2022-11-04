// mui imports
import {
    Box,
    Chip,
    Drawer,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';

interface DrawerProps {
    open: boolean;
    onToggle: ()=>void;
}

const TopDrawer = ( props: DrawerProps) => {


  return (
    <Drawer
    anchor="right"
    open={props.open}
    onClose={props.onToggle}
    sx={{ '& .MuiDrawer-paper': {
        backgroundImage: 'none', 
        width: '', 
        height:'50%', 
        borderRadius: '50% 0 50% 50%',

    } 
    }}
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
        onClick={props.onToggle}
        onKeyDown={props.onToggle}
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
  )
}

export default TopDrawer