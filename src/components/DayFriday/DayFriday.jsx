import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';





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
  const display = useSelector((store) => store);

  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>{heading}</h2>
      {/* {display.map(item => {
        return (
          <div key={item.id}>
            <p >{item.description}</p>
            <img className="items" src={item.image_url} /> */}

    </div>
  );
}
    //   )}
      
      

export default DayFriday;
