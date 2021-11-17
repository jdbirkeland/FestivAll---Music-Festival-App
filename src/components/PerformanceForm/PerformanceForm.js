import { useDispatch } from "react-redux";
import { useState } from "react";

function PerformanceForm() {

  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const [newItem, setNewItem] = useState({
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
  }//end handleEdit

  //start handleNameChange
  const handleCreateName = (event, property) => {
    setNewItem({
      ...newItem,
      [property]: event.target.value
    })
  } // end handleNameChange

  //start handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked');
    console.log(newItem);
    dispatch({ type: 'ADD_ITEM', payload: newItem })
    setNewItem({
      name: '',
      day_performing: '',
      stage_id: '',
      set_start: '',
      set_finish: '',
      description: '',
      link: '',
    })
  } // end handleSubmit
  
  
  return (
    <div className="container">
      <button onClick={() => handleEdit()}>Create</button>
      {editMode ?
          <>
            <form onSubmit={handleSubmit} >
              {/* <h2>Performance to Add</h2> */}
              <input
                required
                value={newItem.name}
                onChange={(event) => handleCreateName(event, 'name')}
                placeholder="Artist Name"
              />
              <input
                required
                value={newItem.day_performing}
                onChange={(event) => handleCreateName(event, 'day_performing')}
                placeholder="Day Performing"
              />
              <input
                required
                value={newItem.stage_id}
                onChange={(event) => handleCreateName(event, 'stage_id')}
                placeholder="Stage"
              />
              <input
                required
                value={newItem.set_start}
                onChange={(event) => handleCreateName(event, 'set_start')}
                placeholder="Set Start Time"
              />
              <input
                required
                value={newItem.set_finish}
                onChange={(event) => handleCreateName(event, 'set_finish')}
                placeholder="Set Finish Time"
              />
              <input
                required
                value={newItem.description}
                onChange={(event) => handleCreateName(event, 'description')}
                placeholder="Artist Description"
              />
              <input
                required
                value={newItem.link}
                onChange={(event) => handleCreateName(event, 'link')}
                placeholder="Artist Link"
              />
              <button type="submit">Create Performance</button>
            </form >
          </> :
          <button type="submit">Update Edit</button>}
    </div>
  )
}

export default PerformanceForm;