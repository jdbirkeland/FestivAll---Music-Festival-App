import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavFavs/BottomNavFavs';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import StarIcon from '@mui/icons-material/Star';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import {
  Resource,
  Editing,
} from 'devextreme-react/scheduler';
import Button from 'devextreme-react/button';
import { useCallback } from 'react';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Favorites(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_DISPLAY_FAVORITES' })
  }, []);

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // const store = useSelector((store) => store);
  const performance = useSelector((store) => store.performanceReducer);

  const schedulerData = [];

  for (let i = 0; i < performance.length; i++) {
    // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
    let dateScheduler = { startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name, stage: performance[i].stage_name };
    console.log(dateScheduler);
    schedulerData.push(dateScheduler)
  }

  const currentDate = '2021-11-19';

  const [heading, setHeading] = useState('Favorites Page');


  const handleButtonClick = (event) => {
    // event.preventDefault();
    alert('You clicked on the star button');
  }

  const handleStarClick = (event) => {
    // event.preventDefault();
    alert('You clicked on the star button');
  }

  const priorityData = [
    {
      text: 'Set to Favorite',
      id: 1,
      color: '#1e90ff',
    }, {
      text: '',
      id: 2,
      color: '#ff9747',
    },
  ];

  console.log({schedulerData});


  return (
    <div className="container">
      <h2>{heading}</h2>
      <Paper >
        <StarIcon onClick={handleStarClick} />
        <Scheduler
          adaptivityEnabled={true}
          data={schedulerData}
        >
          <ViewState
            currentDate={currentDate}
          />
          <DayView
            startDayHour={12}
            endDayHour={24}
          />
          {/* <EditingState />
          <Editing />
          <IntegratedEditing /> */}

          <Appointments />
          <AppointmentTooltip 
            showOpenButton = {StarIcon}
            showCloseButton 
          />
          <AppointmentForm />
          {/* <StarIcon onClick={handleButtonClick} /> */}
         
          {/* <ConfirmationDialog /> */}
          <Resource
            fieldExpr="Favorite"
            allowMultiple={false}
            dataSource={priorityData}
            label="Favorite"
          />

        </Scheduler>
      </Paper>
      <FixedBottomNavigation />
    </div>
  );
}

export default Favorites;
