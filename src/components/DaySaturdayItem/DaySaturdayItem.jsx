import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function DaySaturdayItem() {

    const performance = useSelector((store) => store.performanceReducer);

    const dispatch = useDispatch();
    
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
  
    //start handleEdit
    const handleEdit = (item) => {
        console.log('TEST!');
        setEditMode(!editMode) //toggle for editMode
    } //end handleEdit

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY_SATURDAY' })
      }, []);    

    //start handleNameChange
    const handleNameChange = (event, property, item) => {
        console.log('This is ITEM', item);
        setEditItem({
            ...editItem,
            id: item,
            [property]: event.target.value
        })
    } //end handleNameChange

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked');
        console.log(editItem);
        dispatch({ type: 'EDIT_ITEM_SATURDAY', payload: editItem })
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
            type: 'DELETE_ITEM_SATURDAY',
            payload: item.id
        })
    } //end handleDelete


    return (
        <div className="container">

        {
            performance.map(item => {
                return (
                    <div key={item.id}>
                        <p>Artist: {item.name}</p>
                        {/* <p>{item.day_performing}</p> */}
                        <p>Stage: {item.stage_name}</p>
                        <p>Set Time: {item?.set_start?.split('T')[1]} - {item?.set_finish?.split('T')[1]}</p>
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
                                        placeholder="Artist Description(not required)"
                                    />
                                    <input
                                        // required
                                        value={editItem.link}
                                        onChange={(event) => handleNameChange(event, 'link', item.id)}
                                        placeholder="Artist Link(not required)"
                                    />
                                    <button type="submit">Update Edit</button>
                                </form>
                            </> :
                            <DeleteIcon onClick={() => handleDelete(item)} />}Delete
                    </div>)

                        })



        }
            </div>

        );
    };

export default DaySaturdayItem;