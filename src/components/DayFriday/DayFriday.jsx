import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceForm from '../PerformanceForm/PerformanceForm';
import './DayFriday.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FixedBottomNavigation from '../BottomNavFriday/BottomNavFriday';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DayFriday(props) {



    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

    performance.forEach(performance => {
        for (let key in performance) {
            console.log(`${key}: ${performance[key]}`);
        }
    });

        const currentDate = '2021-11-20';
    const schedulerData = [
        { startDate: '2021-11-20T14:45', endDate: '2021-11-20T16:00', title: 'ppp'},
        { startDate: '2021-11-20T12:00', endDate: '2021-11-20T13:30', title: 'The Good Sax' },
    ];


    const [heading, setHeading] = useState('Friday Day 1');

    console.log(performance);

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


    // const rows: GridRowsProp = [
    //     // { id: item.id, col1: item.name, col2: item.stage_name },
    //     { id: 2, col1: "XGrid", col2: "is Awesome" },
    //     { id: 3, col1: "Material-UI", col2: "is Amazing" },
    //     { id: 4, col1: "Hello", col2: "World" },
    //     { id: 5, col1: "XGrid", col2: "is Awesome" },
    //     { id: 6, col1: "Material-UI", col2: "is Amazing" }
    //   ];

    //   const columns: GridColDef[] = [
    //     { field: "id", hide: true },
    //     { field: "col1", headerName: "Column 1", width: 150 },
    //     { field: "col2", headerName: "Column 2", width: 150 }
    //   ];

    // console.log(performance[1].name);

    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    return (
        <div className="container">
            <h2>{heading}</h2>
            {/* <DataGrid rows={rows} columns={columns} /> */}
            {performance.map(item => {
                return (
                    <div key={item.id}>
                        <p>Artist: {item.name}</p>
                        {/* <p>{item.day_performing}</p> */}
                        <p > Stage: {item.stage_name}</p>
                        <p> Set Time: {item.set_start} - {item.set_finish}</p>
                        <p>{item.description}</p>
                        <p>{item.link}</p>
                        {/* <img className="items" src={item.image_url} /> */}
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

export default DayFriday;
