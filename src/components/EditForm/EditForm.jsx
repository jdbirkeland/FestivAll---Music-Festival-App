import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import CreateIcon from '@mui/icons-material/Create';
// import DoneIcon from '@mui/icons-material/Done';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditFormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    const performance = useSelector((store) => store.performanceReducer);


    const [newItem, setNewItem] = useState({
        name: '',
        day_performing: '',
        stage_id: '',
        set_start: '',
        set_finish: '',
        description: '',
        link: '',
    })

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


    //start handleEditItem
    const handleEditItem = (event, property, item) => {
        console.log('This is ITEM', item);
        setEditItem({
            ...editItem,
            id: item,
            [property]: event.target.value
        })
    } //end handleEditItem

    //start handleNameChange
    const handleCreateName = (event, property) => {
        setNewItem({
            ...editItem,
            [property]: event.target.value
        })
    } // end handleNameChange

    //   //start handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('clicked');
        console.log(editItem);
        dispatch({ type: 'EDIT_ITEM', payload: editItem })
        setNewItem({

            name: '',
            day_performing: '',
            stage_id: '',
            set_start: '',
            set_finish: '',
            description: '',
            link: '',
        })
        setOpen(false);
    } // end handleSubmit


    return (
        <div>
            <Button style={{ backgroundColor: "royalblue", color: '#FFFFFF' }} variant="outlined" onClick={handleClickOpen}>
                Edit Performance
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Performance</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Day Performing - Friday = 1, Saturday =2, Sunday =3;
                        Stage - Viking = 1, Main = 2, Other = 3;
                        Time Format = YYYY-MM-DD HH:MM:SS ex.2021-11-19 12:00:00
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Artist Name"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.name}
                        onChange={(event) => handleEditItem(event, 'name')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Day Performing by Number"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.day_performing}
                        onChange={(event) => handleEditItem(event, 'day_performing')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Stage by Number"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.stage_id}
                        onChange={(event) => handleEditItem(event, 'stage_id')}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Set Start - Format YYYY-MM-DD HH:MM:SS"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.set_start}
                        onChange={(event) => handleEditItem(event, 'set_start')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Set Finish - Format YYYY-MM-DD HH:MM:SS"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.set_finish}
                        onChange={(event) => handleEditItem(event, 'set_finish')}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description(optional)"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.description}
                        onChange={(event) => handleEditItem(event, 'description')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Link(optional)"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={editItem.link}
                        onChange={(event) => handleEditItem(event, 'link')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Update Performance</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

//   return (
//     <div className="container">
//       <CreateIcon onClick={() => handleEdit()}/>Create New Performance
//       {editMode ?
//           <>
//             <form onSubmit={handleSubmit} >
//               {/* <h2>Performance to Add</h2> */}
//               <input
//                 required
                // value={newItem.name}
                // onChange={(event) => handleCreateName(event, 'name')}
//                 placeholder="Artist Name"
//               />
//               <input
//                 required
                // value={newItem.day_performing}
                // onChange={(event) => handleCreateName(event, 'day_performing')}
                // placeholder="Day Performing"
//               />
//               <input
//                 required
                // value={newItem.stage_id}
                // onChange={(event) => handleCreateName(event, 'stage_id')}
//                 placeholder="Stage"
//               />
//               <input
//                 required
                // value={newItem.set_start}
                // onChange={(event) => handleCreateName(event, 'set_start')}
//                 placeholder="Set Start Time"
//               />
//               <input
//                 required
                // value={newItem.set_finish}
                // onChange={(event) => handleCreateName(event, 'set_finish')}
//                 placeholder="Set Finish Time"
//               />
//               <input
//                 // required
                // value={newItem.description}
                // onChange={(event) => handleCreateName(event, 'description')}
//                 placeholder="Artist Description"
//               />
//               <input
//                 // required
                // value={newItem.link}
                // onChange={(event) => handleCreateName(event, 'link')}
//                 placeholder="Artist Link"
//               />
//               <button type="submit">Create Performance</button>
//             </form >
//           </> :
//           <p ></p>}
//     </div>
//   )
// }

// export default PerformanceForm;