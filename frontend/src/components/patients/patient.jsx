import React from "react";
// import Cat from "../../styles/images/cat1.jpg";
import "../../styles/patients.css";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer";

class Patient extends React.Component {
  // constructor(props){
  //     super(props);

  //     this.state = {
  //         i: 0
  //     }
  // }

  // componentDidUpdate(prevProps,prevState) {
  // if(this.state.i !== prevState.i){
  // this.props.requestAllExercises('patients', this.props.patient._id);
  // }
  // }

  render() {
    let exercises = [];
    let indexOfAll = this.props.patient.exercises.map((exercise) => exercise);
    this.props.allExercises.forEach((exercise) => {
      if (indexOfAll.indexOf(exercise._id) !== -1) exercises.push(exercise);
    });

    let patientExe = exercises.map((exercise) => (
      <li className="patient-exercise" key={exercise._id}>
        {exercise.title}
      </li>
    ));

    let avatar = createAvatar(style, {
      seed: this.props.patient.handle,
      size: 192,
    });

    return (
      <div className="patient-info">
        <div className="patient">
          <div
            className="avatar"
            dangerouslySetInnerHTML={{ __html: avatar }}
          ></div>
          <h2 className="patient-name">{this.props.patient.handle}</h2>
        </div>
        <div className="patient-exercises">
          <h2>{this.props.patient.handle}'s Exercises</h2>
          {patientExe}
        </div>
      </div>
    );
  }
}

export default Patient;
