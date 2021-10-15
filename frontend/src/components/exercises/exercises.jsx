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
        let option, deleteExercise, mainShow;
        
        if(isClinician){
            option = (
                <button onClick={() => this.setState({option: true}) }
                    className='exercise-button'>
                    Create an exercise
                </button>)

            deleteExercise = (exerciseId) => (
                <button onClick={() => this.props.removeExercise(exerciseId) }
                    className='exercise-button'>
                    Delete Exercise
                </button>)
        } else {
            deleteExercise = () => (
                null
            )
        }

        const allExercises = this.props.allExercises.map( (exercise) => 
            <div className='exercise-index-container' key={exercise._id}>
                <ul  onClick={() => { this.setState({i: exercise._id, option: false}) }}>
                    <div className='exercise-title-index'>
                        {exercise.title}
                    </div>
                    <div className='exercise-description'>
                        {exercise.description}
                    </div>
                </ul> 
                {deleteExercise(exercise._id)}
            </div>
            )


        mainShow = this.state.option ? <NewExerciseContainer/> : <ExerciseContainer exerciseId={this.state.i}/>;

        if(this.props.allExercises.length === 0) {
            allExercises = (
                <div>No Exercise available :(</div>
            )
        }

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