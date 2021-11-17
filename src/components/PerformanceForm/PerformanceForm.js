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

  const handleEdit = (item) => {
    console.log('TEST!');
    setEditMode(!editMode) //toggle for editMode
  }


  const handleNameChange = (event, property) => {
    setNewItem({
      ...newItem,
      [property]: event.target.value
    })
  } // end handleNameChange

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

      {
        editMode ?
          <>

            <form onSubmit={handleSubmit} >
              {/* <h2>Performance to Add</h2> */}
              <input
                required
                value={newItem.name}
                onChange={(event) => handleNameChange(event, 'name')}
                placeholder="Artist Name"
              />
              <input
                required
                value={newItem.day_performing}
                onChange={(event) => handleNameChange(event, 'day_performing')}
                placeholder="Day Performing"
              />
              <input
                required
                value={newItem.stage_id}
                onChange={(event) => handleNameChange(event, 'stage_id')}
                placeholder="Stage"
              />
              <input
                required
                value={newItem.set_start}
                onChange={(event) => handleNameChange(event, 'set_start')}
                placeholder="Set Start Time"
              />
              <input
                required
                value={newItem.set_finish}
                onChange={(event) => handleNameChange(event, 'set_finish')}
                placeholder="Set Finish Time"
              />
              <input
                required
                value={newItem.description}
                onChange={(event) => handleNameChange(event, 'description')}
                placeholder="Artist Description"
              />
              <input
                required
                value={newItem.link}
                onChange={(event) => handleNameChange(event, 'link')}
                placeholder="Artist Link"
              />

              <button type="submit">Create Performance</button>
            </form >
          </> :
          <button type="submit">Update Edit</button>

      }
    </div>
  )
}

export default PerformanceForm;