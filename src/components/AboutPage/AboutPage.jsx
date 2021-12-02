import React from 'react';
import Box from '@mui/material/Box';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box
    sx={{
        // display: 'flex',
        flexWrap: 'wrap',
        border: '3px solid white',
        borderRadius: '20px',
        padding: '12px',
        boxShadow: '0px 0px 10px white',

    }}
    >
    <div className="container">
      <div>
        <p>Technologies Used: Node, Express, React, Redux, Saga, React-Router, PostgreSQL, Passport w/ Local Authentication, 
          Material UI, CSS, Postman, DevExpress React Scheduler and more!</p>
        <p>Future Development Plans: I plan to re-purpose this app to be able to log, journal, and save pictures from previous and future concert experiences! </p>
        <p>Biggest Challenges: Working with and DevExpress React Scheduler and trying to custom edit its features.</p>
        <p>Special Thanks to Prime Digital Academy, specifically my instructors Dane Smith and Liz Kerber.  SOLINAS, the Greatest cohort I've been apart of and All of you for watching.</p>
      </div>
    </div>
    </Box>
  );
}

export default AboutPage;
