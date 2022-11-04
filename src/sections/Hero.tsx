

// mui imports
import {
    Box,
} from '@mui/material'

const Hero = () => {
  return (
    <Box
     sx={{
      position: 'relative',
      backgroundColor : 'whitesmoke',
      overflow: 'hidden',
      minHeight: 'calc(100vh - 50px)',
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
        // zIndex: 2,
        background: 'pink'
      }
    }}>

    </Box>
  )
}

export default Hero