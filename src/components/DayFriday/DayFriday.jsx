import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';





// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DayFriday(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY' })
    }, []);

    const handleDelete = (item) => {
        console.log(item.id);
        dispatch({
          type: 'DELETE_ITEM',
          payload: item.id
        })
      }
    

    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const friday = useSelector((store) => store.fridayReducer);

    const [heading, setHeading] = useState('Friday Day 1');

    console.log(friday);

    return (
        <div>
            <h2>{heading}</h2>
            {friday.map(item => {
                return (
                    <div key={item.id}>
                        <p >{item.name}</p>
                        <p>{item.day_performing}</p>
                        <p > {item.stage_id}</p>
                        <p> {item.set_start}</p>
                        <p> {item.set_finish}</p>
                        <p>{item.description}</p>
                        <p>{item.link}</p>
                        {/* <img className="items" src={item.image_url} /> */}

                        <button onClick={() => handleDelete(item)}>Delete Artist</button>

                    </div>
                )
            }

            )}
        </div>
    )
};





export default DayFriday;
