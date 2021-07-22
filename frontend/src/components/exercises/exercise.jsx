import React from 'react';

class Exercise extends React.Component{
    // componentDidMount(){
        // let props = this.props;
        // props.requestExercise(
        //     props.match.params.userType, 
        //     props.currentUserId,
        //     props.match.params.exerciseId
        // );
    // }

    render(){
        const exercise = this.props.exercise;
        if(!exercise) return null;
        return (
            <div>
                <img src={exercise.urls[0]} alt="img" />    
                <div>{exercise.title}</div>
                <div>{exercise.instructions}</div>
            </div>
        )
    }
};

export default Exercise;