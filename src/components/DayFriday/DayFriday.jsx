import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceForm from '../PerformanceForm/PerformanceForm';
import './DayFriday.css';




// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DayFriday(props) {

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);

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
        dispatch({ type: 'FETCH_DISPLAY' })
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
            <PerformanceForm />
            <h2>{heading}</h2>
            
            {performance.map(item => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.day_performing}</p>
                        <p > {item.stage_id}</p>
                        <p> {item.set_start} - {item.set_finish}</p>
                        <p>{item.description}</p>
                        <p>{item.link}</p>
                        {/* <img className="items" src={item.image_url} /> */}
                        <button onClick={() => handleEdit()}>Edit</button>
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
                                        required
                                        value={editItem.description}
                                        onChange={(event) => handleNameChange(event, 'description', item.id)}
                                        placeholder="Artist Description"
                                    />
                                    <input
                                        required
                                        value={editItem.link}
                                        onChange={(event) => handleNameChange(event, 'link', item.id)}
                                        placeholder="Artist Link"
                                    />
                                    <button type="submit">Update Edit</button>
                                </form>
                            </> :
                            <button onClick={() => handleDelete(item)}>Delete Artist</button>}
                    </div>)
            })}

        </div>
    )
};

export default DayFriday;
