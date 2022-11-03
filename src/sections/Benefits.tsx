

// mui imports
import {
    Box,
    Grid,
    Typography,
    // Button,
} from '@mui/material'

// project imports
import Carrousel from './Carrousel'

const Benefits = () => {
  return (
    <Box
    sx={{ 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '55vh'
    }}>
      <Grid 
        container
        sx={{ 
          position: 'relative',
          overflow: 'hidden',
          minHeight: '55vh'
        }}>
        {/* Massage Benefits Text */}
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            width="90%"
            height="90%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "pink",
              borderRadius: "20px",
            }}
          >
            <Typography>
              Massage Benefits
            </Typography>
          </Box>
        </Grid>

        {/* Photo Gallery */}
        <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
              }}
            >
              <Carrousel/>
          </Box>
        </Grid> 
      </Grid>
    </Box>
  )
}

export default Benefits