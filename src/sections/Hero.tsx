

// mui imports
import {
    Box,
} from '@mui/material'

const Hero = () => {
  return (
    <Box
     sx={{
      position: 'relative',
      backgroundColor : '',
      overflow: 'hidden',
      minHeight: '100vh',
      '&>*': {
        position: 'relative',
        // zIndex: 5
      },
      '&:before': {
        content: '""',
        position: 'relative',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
        background: 'pink'
      }
    }}>

    </Box>
  )
}

export default Hero