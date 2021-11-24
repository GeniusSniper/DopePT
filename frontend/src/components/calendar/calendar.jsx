import React from "react";
import { extend } from "@syncfusion/ej2-base";
import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Week,
  Resize,
  ExcelExport,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        Id: 1,
        Subject: "Clinicians are not available",
        StartTime: new Date(2021, 0, 24, 10, 0),
        EndTime: new Date(2021, 0, 24, 12, 30),
        IsAllDay: true,
        RecurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU;",
        IsBlock: true,
      },
    ];
    this.eventSettings = { dataSource: this.data, editFollowingEvents: true };
    this.addingEvent = this.addingEvent.bind(this);
  }

  componentDidMount() {
    
  }

  addingEvent(e) {
    console.log(e);
    if (e.data) {
      // this.setState({data: this.state.data.push(e.data[0])});
      setTimeout(() => {
        console.log(this.data);
      }, 500);
    }
  }

  render() {
    return (
      <ScheduleComponent
        currentView="Week"
        eventSettings={this.eventSettings}
        actionBegin={this.addingEvent}
      >
        <ViewsDirective>
          <ViewDirective
            option="Day"
            startHour="9:00"
            endHour="17:00"
          ></ViewDirective>
          <ViewDirective
            option="Week"
            startHour="9:00"
            endHour="17:00"
          ></ViewDirective>
          <ViewDirective option="Month"></ViewDirective>
          <ViewDirective option="Agenda"></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default Calendar;
