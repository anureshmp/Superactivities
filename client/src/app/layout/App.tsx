import { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const title = 'Welcome to superactivites';
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {

    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))
  }, []);

  return (
    <>
     {/* <Typography variant='h3' className='app' style={{color: 'green'}}>{title}</Typography> */}
     <Box sx={{color: '#eeeeee'}}>
    <CssBaseline/>
     <Navbar/>
     <Container maxWidth='xl' sx={{marginTop:3}}>
        <ActivityDashboard activities={activities}/>
     </Container>
    </Box>
     </>
  )
}

export default App
