
// mui imports
import {
    Box,
    Grid,
    Typography
} from '@mui/material'

// project imports
import Carrousel from './Carrousel'

const images = [
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  }
];

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
          minHeight: '80vh'
        }}>

        {/* Photo Gallery */}
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems:"center",
              justifyContent: "center"
            }}
          >
            <Carrousel images={images} />
          </Box>
        </Grid> 

        {/* Massage Benefits Text */}
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            width="70%"
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
            Help your body to
            Reduce stress
            Improves circulation
            Increases energy
            Improves Range of Motion
            Reduces Muscle Pain
            Rehabilitates after injury
            Manages chronic issues
            Reduces anxiety
            Improves flexibility
            Increases body awareness
            Optimizes healing
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Touch