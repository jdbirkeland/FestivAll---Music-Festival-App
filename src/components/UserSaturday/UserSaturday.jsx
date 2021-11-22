import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavSaturday/BottomNavSaturday';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


function UserSaturday(props) {

    const dispatch = useDispatch();


    const performance = useSelector((store) => store.performanceReducer);

    for (let i = 0; i < performance.length; i++) {
        console.log(performance[i].name);
    }

    const currentDate = '2021-11-20';
    const schedulerData = [
        { startDate: '2021-11-20T14:45', endDate: '2021-11-20T16:00', title: performance[2].name },
    ];

    const [heading, setHeading] = useState('USER Saturday Day 2');


    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_SATURDAY' })
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

export default UserSaturday;
