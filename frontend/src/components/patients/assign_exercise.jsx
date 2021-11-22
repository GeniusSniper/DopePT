import React from "react";
import "../../styles/assign_exercises.css";

class AssignExercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.patientExercises("patients", this.props.patient._id);
  }

  componentWillUnmount() {
    this.props.clearPatientExercise();
  }

  render() {
    // if(this.props.patientExercise.length === 0) return null;
    let allExercises = this.props.allExercises.map((exercise, i) => {
      let button =
      //button doesnt change when clicked
        this.props.patient.exercises.indexOf(exercise._id) === -1 ? (
          <button
            className="exercise-button"
            onClick={() => {
              this.props.assignExercise(exercise._id, this.props.patient._id);
              this.setState({ [exercise._id]: true });
            }}
          >
            Assign This Exercise
          </button>
        ) : (
          <button
            className="exercise-button"
            onClick={() => {
              this.props.removePatienExercise(
                exercise._id,
                this.props.patient._id
              );
              this.setState({ [exercise._id]: false });
            }}
          >
            Delete This Exercise
          </button>
        );
      return (
        <div className="all-exercises-list" key={exercise._id}>
          <div>{exercise.title}</div>
          {button}
        </div>
      );
    });
    let patientExercises = this.props.patientExercise.map((exercise) => {
      return (
        <div className="patient-exercise-list-item" key={exercise._id}>
          <div>{exercise.title}</div>
        </div>
      );
    });

    return (
      <div className="patient-exercise-container">
        <div>
          <h1>All Exericses</h1>
          <div>{allExercises}</div>
        </div>
        <div className="patient-exercise-list-container">
          <h1>{this.props.patient.handle}'s Exercise</h1>
          <div className="patient-exercise-list">{patientExercises}</div>
        </div>
      </div>
    );
  }
}

export default AssignExercise;
