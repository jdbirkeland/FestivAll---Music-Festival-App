import { useDispatch } from "react-redux";
import { useState } from "react";

function PerformanceForm () {

  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({
    name: '',
    day_performing: '',
    stage_id: '',
    set_start: '',
    set_finish: '',
    description: '',
    link: '',
})

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
      
        <form onSubmit={handleSubmit}> 
        <h2>Performance to Add</h2>
        <input
        required
        value={newItem.name}
        onChange={(event) => handleNameChange(event, 'description')}
        placeholder="Artist Name"
        />
        {/* <input 
        required
        value={newItem.image_url}
        onChange={(event) => handleNameChange(event, 'image_url')}
        placeholder="Image URL"/> */}

        <button type="submit">ADD PERFORMANCE</button>
      </form>
    )
}

export default PerformanceForm;