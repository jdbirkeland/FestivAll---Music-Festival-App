import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceForm from '../PerformanceForm/PerformanceForm';




// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DayFriday(props) {

    const dispatch = useDispatch();

    const friday = useSelector((store) => store.fridayReducer);

    const [heading, setHeading] = useState('Friday Day 1');

    console.log(friday);

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


    const handleEdit = (item) => {
        console.log('TEST!');
        setEditMode(!editMode) //toggle for editMode
    }

    const handleNameChange = (event, property, item) => {
        console.log('This is ITEM', item);
        setEditItem({
            ...editItem,
            id: item,
            [property]: event.target.value
        })
    }

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
    }


    const handleDelete = (item) => {
        console.log(item.id);
        dispatch({
            type: 'DELETE_ITEM',
            payload: item.id
        })
    }


    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    return (
        <div className="container">
            <PerformanceForm />
            <h2>{heading}</h2>
            <button onClick={() => handleEdit()}>Edit</button>
            {friday.map(item => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.day_performing}</p>
                        {/* <p > {item.stage_id}</p> */}
                        <p> {item.set_start} - {item.set_finish}</p>
                        <p>{item.description}</p>
                        <p>{item.link}</p>
                        {/* <img className="items" src={item.image_url} /> */}

                        {editMode ?
                            <>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        required
                                        value={editItem.name}
                                        onChange={(event) => handleNameChange(event, 'name', item.id)}
                                        placeholder="Artist Name"
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
