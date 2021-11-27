import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavSunday/BottomNavSunday';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


function UserSunday(props) {

    const dispatch = useDispatch();


    const performance = useSelector((store) => store.performanceReducer);

    const schedulerData = [];

    for (let i = 0; i < performance.length; i++) {
        // const friday = '2021-11-19'
        // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
        let dateScheduler = {startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name};
        console.log(dateScheduler);
        schedulerData.push(dateScheduler)
    }

    const currentDate = '2021-11-21';
    // const schedulerData = [
    //     { startDate: '2021-11-21T14:45', endDate: '2021-11-21T16:00', title: performance[2].name },
    // ];

    const [heading, setHeading] = useState('USER Sunday Day 3');


    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_SUNDAY' })
    }, []);


    return (
        <div className="container">
            <h2>{heading}</h2>

            {/* <PerformanceForm /> */}
            <FixedBottomNavigation />

            <Paper>
                <Scheduler
                    data={schedulerData}
                >
                    <ViewState
                        currentDate={currentDate}
                    />
                    <DayView
                        startDayHour={12}
                        endDayHour={24}
                    />
                    <Appointments />
                </Scheduler>
            </Paper>

        </div>
    )
};

export default UserSunday;
