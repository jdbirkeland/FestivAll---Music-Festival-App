import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import FestivalIcon from '@mui/icons-material/Festival';
import { Link } from 'react-router-dom';
import './BottomNavFriday.css'


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper className="bottomNav" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/user" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/usersaturday" label="Saturday" icon={<FestivalIcon />} />
          <BottomNavigationAction component={Link} to="/usersunday" label="Sunday" icon={<FestivalIcon />} />
          <BottomNavigationAction component={Link} to="/favorites" label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

