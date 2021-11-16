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
                        {/* <img className="items" src={item.image_url} /> */}

                    </div>
                )
            }

            )}
        </div>
    )
};





export default DayFriday;
