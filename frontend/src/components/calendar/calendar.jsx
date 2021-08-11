import React from "react";
import { Agenda, Day, Inject, Month, ScheduleComponent, ViewDirective, ViewsDirective, Week } from '@syncfusion/ej2-react-schedule';

class Calendar extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [{
            Id: 1,
            Subject: 'Clinians are not available',
            StartTime: new Date(2021, 0, 24, 10, 0),
            EndTime: new Date(2021, 0, 24, 12, 30),
            IsAllDay: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=SA,SU;',
            IsBlock: true,
        }];
    this.eventSettings = { dataSource: this.data, editFollowingEvents: true };
  }

  render() {
    return (
      <ScheduleComponent currentView='Week' eventSettings={this.eventSettings} >
        <ViewsDirective>
          <ViewDirective option='Day' startHour='9:00' endHour='17:00'></ViewDirective>
          <ViewDirective option='Week' startHour='9:00' endHour='17:00'></ViewDirective>
          <ViewDirective option='Month'></ViewDirective>
          <ViewDirective option='Agenda'></ViewDirective>
        </ViewsDirective>
        <Inject services={[ Day, Week, Month, Agenda ]}/>
      </ScheduleComponent>
    )
  }
}

export default Calendar;