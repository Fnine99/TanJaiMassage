
// mui imports
import {
    Box,
} from '@mui/material'

const Discover = () => {
  return (
    <Box  
     sx={{
      position: 'relative',
      bgcolor: 'green.100',
      overflow: 'hidden',
      minHeight: '80vh',
      '&>*': {
        position: 'relative',
        zIndex: 5
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
        background: 'green.100'
      }
    }}>
        Discover
    </Box>
  )
}

export default Discover