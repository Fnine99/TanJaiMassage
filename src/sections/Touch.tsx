
// mui imports
import {
    Box,
    Grid,
    Typography
} from '@mui/material'

const Touch = () => {
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

        {/* Photo Gallery */}
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
          </Box>
        </Grid> 

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
              Touch
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Touch