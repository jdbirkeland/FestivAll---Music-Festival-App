import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceForm from '../PerformanceForm/PerformanceForm';
import './DayFriday.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import FixedBottomNavigation from '../BottomNavFriday/BottomNavFriday';
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//     Scheduler,
//     DayView,
//     Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import FormDialog from '../PerformanceForm/PerformanceForm';
// import EditFormDialog from '../EditForm/EditForm';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DayFriday(props) {

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

    const [heading, setHeading] = useState('Friday Day 1');

    const [editMode, setEditMode] = useState(false);

    const [editItem, setEditItem] = useState({
        id: '',
        name: '',
        day_performing: '',
        stage_id: '',
        set_start: '',
        set_finish: '',
        description: '',
        link: '',
    })

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_FRIDAY' })
    }, []);

    //start handleEdit
    const handleEdit = (item) => {
        console.log('TEST!');
        setEditMode(!editMode) //toggle for editMode
    } //end handleEdit


    //start handleNameChange
    const handleNameChange = (event, property, item) => {
        console.log('This is ITEM', item);
        setEditItem({
            ...editItem,
            id: item,
            [property]: event.target.value
        })
    } //end handleNameChange

    //start handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked');
        console.log(editItem);
        dispatch({ type: 'EDIT_ITEM', payload: editItem })
        setEditItem({
            id: '',
            name: '',
            day_performing: '',
            stage_id: '',
            set_start: '',
            set_finish: '',
            description: '',
            link: '',
        })
        setEditMode(false);
    } //end handleSubmit

    //start handleDelete
    const handleDelete = (item) => {
        console.log(item.id);
        dispatch({
            type: 'DELETE_ITEM',
            payload: item.id
        })
    } //end handleDelete


    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    return (
        <div className="container">
            <h2>{heading}</h2>

            {performance.map(item => {
                return (
                    <div key={item.id}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                border: '4px solid white',
                                borderRadius: '20px',
                                padding: '20px',
                            }}
                            >
                        {/* <Paper className="paper" elevation={15}> */}
                            <p className="text">Artist: {item.name}</p> 
                            <p className="text">Stage: {item.stage_name}</p>
                            <p className="text">Set Start: {item?.set_start?.split('T')[1]} </p>
                            <p className="text">Set Finish: {item?.set_finish?.split('T')[1]}</p>

                            <p className="text" >{item.description}</p>
                            <p className="text">{item.link}</p>
                        {/* </Paper> */}
                        </Box>


                        <EditIcon onClick={() => handleEdit()} />Edit
                        {editMode ?
                            <>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        required
                                        value={editItem.name}
                                        onChange={(event) => handleNameChange(event, 'name', item.id)}
                                        placeholder="Artist Name"
                                    />
                                    <input
                                        required
                                        value={editItem.day_performing}
                                        onChange={(event) => handleNameChange(event, 'day_performing', item.id)}
                                        placeholder="Day Performing"
                                    />
                                    <input
                                        required
                                        value={editItem.stage_id}
                                        onChange={(event) => handleNameChange(event, 'stage_id', item.id)}
                                        placeholder="Stage"
                                    />
                                    <input
                                        required
                                        value={editItem.set_start}
                                        onChange={(event) => handleNameChange(event, 'set_start', item.id)}
                                        placeholder="Set Start Time"
                                    />
                                    <input
                                        required
                                        value={editItem.set_finish}
                                        onChange={(event) => handleNameChange(event, 'set_finish', item.id)}
                                        placeholder="Set Finish Time"
                                    />
                                    <input
                                        // required
                                        value={editItem.description}
                                        onChange={(event) => handleNameChange(event, 'description', item.id)}
                                        placeholder="Artist Description"
                                    />
                                    <input
                                        // required
                                        value={editItem.link}
                                        onChange={(event) => handleNameChange(event, 'link', item.id)}
                                        placeholder="Artist Link"
                                    />
                                    <button type="submit">Update Edit</button>
                                </form>
                            </> :
                            <DeleteIcon onClick={() => handleDelete(item)} />}Delete
                    </div>)
            })}
            <PerformanceForm />
            <FixedBottomNavigation />
        </div >
    )
};

export default DayFriday;
