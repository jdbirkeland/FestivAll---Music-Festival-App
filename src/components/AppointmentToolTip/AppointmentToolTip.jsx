import React from 'react';
import Query from 'devextreme/data/query';
// import 'devextreme/localization/globalize/date';
import { useDispatch, useSelector } from 'react-redux';


import { moviesData } from './data.js';

function getMovieById(id) {
  return Query(moviesData).filter(['id', id]).toArray()[0];
}

const performance = useSelector((store) => store.performanceReducer);

const schedulerData = [];

for (let i = 0; i < performance.length; i++) {
    // console.log(performance[i].name, performance[i].set_start, performance[i].set_finish);
    let dateScheduler = { startDate: performance[i].set_start, endDate: performance[i].set_finish, title: performance[i].name, stage: performance[i].stage_name };
    console.log(dateScheduler);
    schedulerData.push(dateScheduler)
}

export default class AppointmentTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: getMovieById(props.data.appointmentData.movieId),
    };
  }

  render() {
    const { schedulerData } = this.state;
    return (
      <div className="movie-tooltip">
        {/* <img src={movieData.image} /> */}
        <div className="movie-info">
          <div className="movie-title">
            TESTING
          </div>
          <div>
            Director:
          </div>
          <div>
            Duration:  minutes
          </div>
        </div>
      </div>
    );
  }
}
