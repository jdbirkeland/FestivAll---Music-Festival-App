import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavSaturday/BottomNavSaturday';
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
import {
    Resource,
    Editing,
} from 'devextreme-react/scheduler';
import Button from 'devextreme-react/button';
import { useCallback } from 'react';


function UserSaturday(props) {

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

    const schedulerData = [];

    for (let i = 0; i < performance.length; i++) {
        // const friday = '2021-11-19'
        // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
        let dateScheduler = { startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name };
        console.log(dateScheduler);
        schedulerData.push(dateScheduler)
    }

    const currentDate = '2021-11-20';

    const [heading, setHeading] = useState('Saturday - Day 2');

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_SATURDAY' })
    }, []);

    const handleStarClick = (event) => {
        // event.preventDefault();
        console.log('clicked', event.target);
        alert('Added To Favorites!');
    }

    let stageName = 'Main';

    const TextEditor = (props) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (props.type === 'multilineTextEditor' || props.type === 'checkBox') {
            return null;
        } return <AppointmentForm.TextEditor {...props} />;
    };

    const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
        return (
            <AppointmentForm.BasicLayout
                appointmentData={appointmentData}
                onFieldChange={onFieldChange}
                {...restProps}
            >
                <AppointmentForm.TextEditor
                    value={stageName}
                    type="title"
                />
            </AppointmentForm.BasicLayout>
        );
    };

    return (
        <div className="container">
            <h2>{heading}</h2>


            <Paper>
                <StarBorderIcon onClick={handleStarClick} />
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
                    <EditingState
                        onCommitChanges={handleStarClick}
                    />
                    <Editing />
                    <IntegratedEditing />
                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showCloseButton
                    />
                    <AppointmentForm
                        basicLayoutComponent={BasicLayout}
                        textEditorComponent={TextEditor}
                    />
                </Scheduler>
            </Paper>
            <FixedBottomNavigation />
        </div>
    )
};

export default UserSaturday;
