
// mui imports
import {
  Box,
} from '@mui/material'

const Footer = () => {
  return (
    <Box
     sx={{
      position: 'relative',
      bgcolor: 'grey.800',
      overflow: 'hidden',
      minHeight: '25vh',
      '&>*': {
        position: 'relative',
        zIndex: 5
      }
    }}>
      Footer
    </Box>
  )
}

export default Footer