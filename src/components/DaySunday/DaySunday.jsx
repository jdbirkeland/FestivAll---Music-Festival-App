import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceForm from '../PerformanceForm/PerformanceForm';
import FixedBottomNavigation from '../BottomNavFavs/BottomNavFavs';
import EventItem from '../EventItem/EventItem.jsx'


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DaySunday(props) {

  const dispatch = useDispatch();

  const performance = useSelector((store) => store.performanceReducer);

  const [heading, setHeading] = useState('Sunday - Day 3');

  useEffect(() => {
    dispatch({ type: 'FETCH_DISPLAY_SUNDAY' })
  }, []);

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  return (
    <div className="container">
      <h2>{heading}<PerformanceForm /></h2>

      {performance.map(item => {
        return (
          <EventItem item={item} key={item.id} />
        )
      })}
      <FixedBottomNavigation />
    </div>
  )
};

export default DaySunday;
