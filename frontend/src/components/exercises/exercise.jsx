import React from 'react';

class Exercise extends React.Component{
    componentDidMount(){
        let props = this.props;
        props.requestExercise(
            props.match.params.userType, 
            props.currentUserId,
            props.match.params.exerciseId
        );
    }

    render(){
        const exercise = this.props.exercise;
        if(!exercise) return null;
        return (
            <div>
                <div>{exercise.title}</div>
                <div>{exercise.description}</div>
            </div>
        )
    }
};

export default Exercise;