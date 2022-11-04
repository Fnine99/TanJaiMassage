// mui imports
import {
  Paper
} from '@mui/material'

// project imports
import Hero from 'sections/Hero'
import Benefits from 'sections/Benefits'
import Touch from 'sections/Touch'
import Discover from 'sections/Discover'

const Home = () => {
  return (
    <>
      <Hero />
      <Paper elevation={10} square sx={{ backgroundColor: 'whitesmoke' }}>
        <Benefits />
        <Touch />
        <Discover /> 
      </Paper>
    </>
  )
}

export default Home