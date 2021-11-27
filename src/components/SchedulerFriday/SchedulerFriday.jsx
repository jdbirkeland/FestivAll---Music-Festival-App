import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2021-11-20';
const schedulerData = [
  { startDate: '2021-11-20T14:45', endDate: '2021-11-20T16:00', title: 'Purity Ring' },
  { startDate: '2021-11-20T12:00', endDate: '2021-11-20T13:30', title: 'The Good Sax' },
];

export default () => (
  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <DayView
        startDayHour={12}
        endDayHour={24}
      />
      <Appointments />
    </Scheduler>
  </Paper>
);