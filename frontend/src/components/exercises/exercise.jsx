import React from 'react';
import '../../styles/profile.css';

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
            <div className='exercise-info'>
                <img className='exercise-picture' src={exercise.urls[0]} alt=":(" />    
                <div className='exercise-title'>{exercise.title}</div>
                <div className='exercise-instructions'>{exercise.instructions}</div>
            </div>
        )
    }
};

export default Exercise;