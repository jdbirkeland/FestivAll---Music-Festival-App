import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';


function EventItem({item}) {

    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

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

    const handleEdit = (item) => {
        console.log('TEST!');
        setEditMode(!editMode) //toggle for editMode
    } //end handleEdit

    return ( <div key={item.id}>
        <Box
            sx={{
                // display: 'flex',
                flexWrap: 'wrap',
                border: '3px solid white',
                borderRadius: '20px',
                padding: '12px',
                boxShadow: '0px 0px 10px white',

            }}
            >
        {/* <Paper className="paper" elevation={15}> */}
            <p className="text">Artist: {item.name}</p> 
            <p className="text">Stage: {item.stage_name}</p>
            <p className="text">Set Start: {item?.set_start?.split('T')[1]}</p>
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
    </div>
    )
}

export default EventItem;