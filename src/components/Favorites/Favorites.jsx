import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FixedBottomNavigation from '../BottomNavFavs/BottomNavFavs';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Favorites(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DISPLAY' })
      }, []);

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Favorites Page');

  return (
    <div>
      <h2>{heading}</h2>
      <FixedBottomNavigation/>
    </div>
  );
}

export default Favorites;
