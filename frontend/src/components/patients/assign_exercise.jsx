import React from 'react';
import '../../styles/assign_exercises.css';

class AssignExercise extends React.Component {
    componentDidMount(){
        this.props.patientExercises('patients', this.props.patient._id);
    }

    render(){
        if(!this.patientExercises) return null;
        return (
            <div>
                hi
            </div>
        )
    }
}

export default AssignExercise;
