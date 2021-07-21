import React from 'react';

class Exercises extends React.Component{
    componentDidMount(){
        let props = this.props;
        props.requestAllExercises(
            props.match.params.userType
        );
    }

    render(){
        if(this.props.allExercises.length === 0) return null;
        const allExercises = this.props.allExercises.map( exercise => <div key={exercise.id}>
                {exercise.title}
                </div> 
            )
        return (
            <div>
                {allExercises}
            </div>
        )
    }
};

export default Exercises;