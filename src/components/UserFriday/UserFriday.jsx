import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavFriday/BottomNavFriday';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';




function UserFriday(props) {

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

    const schedulerData = [];

    for (let i = 0; i < performance.length; i++) {
        // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
        let dateScheduler = { startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name };
        console.log(dateScheduler);
        schedulerData.push(dateScheduler)
    }

    const currentDate = '2021-11-19';


    const [heading, setHeading] = useState('USER Friday Day 1');


    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_FRIDAY' })
    }, []);

    const style = ({ palette }) => ({
        commandButton: {
          backgroundColor: 'rgba(255,255,255,0.65)',
        },
      });      

    const CommandButton = withStyles(style, { name: 'CommandButton' })(({
        classes, ...restProps
      }) => (
        <AppointmentTooltip.CommandButton {...restProps} className={classes.commandButton} />
      ));

    console.log(Appointments);

    
      
    return (
        <div className="container">
            <h2>{heading}</h2>

            {/* <PerformanceForm /> */}
            <Paper >
            
                <Scheduler
                    data={schedulerData}
                    
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <EditingState />
                    <IntegratedEditing />

                    <DayView
                        startDayHour={12}
                        endDayHour={24}
                    />
                    <Appointments />
                    <AppointmentTooltip 
                    showOpenButton
                    
                    // headerComponent={Header}
                    // contentComponent={Content}
                    commandButtonComponent={StarBorderIcon} 
                    // showCloseButton
                    // contentComponent={StarBorderIcon}
                    /> 
                </Scheduler>
            </Paper>

            <FixedBottomNavigation />


        </div>
    )
};

export default UserFriday;
