import React from 'react';
import '../../styles/assign_exercises.css';

class AssignExercise extends React.Component {
    componentDidMount(){
        this.props.requestAllExercises('patients', this.props.patient._id)
    }

    render(){
        return null;
    }
}

export default AssignExercise;
