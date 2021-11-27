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


    const [heading, setHeading] = useState('USER Friday Day 1');
    const [favorite, setFavorite] = useState('Favorite');


    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_FRIDAY' })
    }, []);


    const handleStarClick = (event) => {
        // event.preventDefault();
        alert('You clicked on the star button');
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

    // const Content = () => <div>schedulerData</div>;
    // const form = event.form;
    // let mainGroupItems = form.itemOption('mainGroup').items;
    // if (!mainGroupItems.find(function(i) { return i.dataField === "phone" })) {
    //     mainGroupItems.push({
    //         colSpan: 2, 
    //         label: { text: "Phone Number" },
    //         editorType: "dxTextBox",
    //         dataField: "phone"
    //     });
    //     form.itemOption('mainGroup', 'items', mainGroupItems);
    // }

    const handleButtonClick = useCallback((e) => {
        alert("The button was clicked")
    }, []);

    console.log({schedulerData});

    return (
        <div className="container">
            <h2>{heading}</h2>

            {/* <PerformanceForm /> */}
            <Paper >
                <StarBorderIcon onClick={handleStarClick} />
                <Scheduler
                    adaptivityEnabled={true}
                    data={schedulerData}
                // groups={groups}
                >
          
                    {/* <Resource
                        dataSource={schedulerData}
                        fieldExpr="stage_name"
                        label="Stage"
                    /> */}

                    <ViewState
                        currentDate={currentDate}
                    />
                    <DayView
                        startDayHour={12}
                        endDayHour={24}
                    />

                    <EditingState />
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
                    <AppointmentForm />
                    <Button
                onClick={handleButtonClick}
            />
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
