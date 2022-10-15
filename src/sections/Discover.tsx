
// mui imports
import {
    Box,
} from '@mui/material'

const Discover = () => {
  return (
    <Box  
     sx={{
      position: 'relative',
      bgcolor: 'grey.800',
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
        background: 'linear-gradient(329.36deg, #000000 14.79%, rgba(67, 67, 67, 0.28) 64.86%);'
      }
    }}>
        Discover
    </Box>
  )
}

export default Discover