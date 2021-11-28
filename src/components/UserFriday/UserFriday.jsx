import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FixedBottomNavigation from '../BottomNavFriday/BottomNavFriday';
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
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
import {
    Resource,
    Editing,
} from 'devextreme-react/scheduler';
import Button from 'devextreme-react/button';
import { useCallback } from 'react';
import './UserFriday.css'
import Form from 'devextreme-react/form';


function UserFriday(props) {

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

    const schedulerData = [];

    for (let i = 0; i < performance.length; i++) {
        // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
        let dateScheduler = { startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name, stage: performance[i].stage_name };
        console.log(dateScheduler);
        schedulerData.push(dateScheduler)
    }

    const currentDate = '2021-11-19';

    const [heading, setHeading] = useState('Friday - Day 1');
    const [favorite, setFavorite] = useState('Favorite');

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_FRIDAY' })
    }, []);


    const handleStarClick = (event) => {
        // event.preventDefault();
        console.log('clicked', event.target);
        alert('Added To Favorites!');
    }

    const groups = ['favorite'];

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

    let stageName = 'Viking';

    // for (let i = 0; i < performance.length; i++) {
    //     let nameStage = { stage: performance[i].stage_name };
    //     console.log(nameStage);
    //     stageName.push(nameStage)
    // }

    console.log(stageName);


   
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
              value = {stageName}
              type="title"
            />
          </AppointmentForm.BasicLayout>
        );
      };

    const handleButtonClick = useCallback((e) => {
        alert("The button was clicked")
    }, []);

    console.log({schedulerData});

    return (
        <div className="container">
            <h2>{heading}</h2>
            <Paper >
                <StarBorderIcon onClick={handleStarClick} />
                <Scheduler 
                    className="scheduler"
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
                    <Editing
                        // allowDragging={false}
                        // allowAdding ={false}
                    />
                    <IntegratedEditing  />

                    <Appointments />
                    <AppointmentTooltip
                        showOpenButton
                        showCloseButton
                    // headerComponent={Header}
                    // contentComponent={Content}
                    // commandButtonComponent
                    // contentComponent={StarBorderIcon}
                    />
                    <AppointmentForm
                    basicLayoutComponent={BasicLayout}
                    textEditorComponent={TextEditor}
                     />
                    {/* <Button text="Favorite"
                onClick={handleButtonClick}
            /> */}
            <ConfirmationDialog />
                    {/* <CommandButton onClick={handleStarClick} /> */}
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
    )
};

export default UserFriday;
