import React from 'react';
import ExerciseContainer from './exercise_container';
import '../../styles/profile.css';
import NewExerciseContainer from './new_exercise_container';

class Exercises extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0,
            option: false
        }
    }

    componentDidMount(){
        let props = this.props;
        props.requestAllExercises(
            props.userType,
            props.currentUserId
        );
    }

    render(){
        if(this.props.allExercises.length === 0) return null;
        let isClinician = (this.props.userType === 'clinicians');
        const allExercises = this.props.allExercises.map( (exercise, j) => 
            <div key={exercise._id}>
                <ul  onClick={() => { this.setState({i: j, option: false}) }}>
                    <div className='exercise-title-index'>
                        {exercise.title}
                    </div>
                    <div className='exercise-description'>
                        {exercise.description}
                    </div>
                </ul> 
                <button onClick={() => this.props.removeExercise(exercise._id, j) }>
                    Delete Exercise
                </button>
            </div>
            )
        let option, mainShow;

        if(isClinician){
            option = <button onClick={() => this.setState({option: true})}>
                Create an exercise
            </button>
        }

        mainShow = this.state.option ? <NewExerciseContainer/> : <ExerciseContainer exerciseId={this.state.i}/>;
        return (
            <div className='profile-grid'>
                <div className='left-side-bar'>
                    <div className='exercises-index'>
                        {option}
                        <br />
                        {allExercises}
                    </div>
                </div>
                <div className='main-show'>
                    <div className='exercise-show'>
                        {mainShow}
                    </div>
                </div>
            </div>
        )
    }
};

export default Exercises;