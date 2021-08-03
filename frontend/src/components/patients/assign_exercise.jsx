import React from 'react';
import '../../styles/assign_exercises.css';

class AssignExercise extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    componentDidMount(){
        this.props.patientExercises('patients', this.props.patient._id);
    }

    componentWillUnmount(){
        this.props.clearPatientExercise();
    }

    render(){
        if(this.props.patientExercise.length === 0) return null;
        let allExercises = this.props.allExercises.map( (exercise, i) => {
            let button = null;
            if(this.props.patient.exercises.indexOf(exercise._id) === -1){
                if(!this.state[i]){
                    button = (
                    <button onClick={() => {
                            this.props.assignExercise(exercise._id, this.props.patient._id);
                            this.setState({ [i]: true })
                        }}>
                        Assign this Exercise
                    </button>)
                }
            } else {

            }
            return (
            <div key={exercise._id}>
                <div>{exercise.title}</div>
               {button}
            </div>
        )});
        let patientExercises = this.props.patientExercise.map( exercise => (
            <div key={exercise._id}>
                <div>{exercise.title}</div>
            </div>
        ))
        return (
            <div>
                <div>
                    <h1>ALL Exericses</h1>
                    <div>{allExercises}</div>
                </div>
                <div>
                    <h1>{this.props.patient.handle}'s Exercise</h1>
                    <div>{patientExercises}</div>
                </div>
            </div>
        )
    }
}

export default AssignExercise;
