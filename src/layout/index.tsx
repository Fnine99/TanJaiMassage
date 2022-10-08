import { Outlet } from 'react-router-dom'

// project imports
import Header from './Header'
import Footer from './Footer'

// mui imports
import {
  Box,
} from '@mui/material'

const Layout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Box component="main" sx={{ width: '100%', flexGrow: 1 }}>
        <Box sx={{ position: 'relative', minHeight: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column' }}>
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout