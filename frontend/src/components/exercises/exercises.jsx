import React from 'react';
import ExerciseContainer from './exercise_container';
import '../../styles/profile.css';
import NewExerciseContainer from './new_exercise_container';
import UpdateExerciseContainer from './UpdateExerciseContainer';

class Exercises extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0,
            option: false,
            update: false,
            exercise: null
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
        // if(this.props.allExercises.length === 0) return null;
        let isClinician = (this.props.userType === 'clinicians');
        let createExerciseButton, deleteExercise, mainShow, updateExerciseButton;
        
        if(isClinician){
            createExerciseButton = (
                <button onClick={() => this.setState({option: true}) }
                    className='exercise-button'>
                    Create an exercise
                </button>)

            deleteExercise = (exerciseId) => (
                <button onClick={() => this.props.removeExercise(exerciseId) }
                    className='exercise-button'>
                    Delete Exercise
                </button>)

            // updateExerciseButton = exercise => (
            //     <button onClick={() => this.setState({update: true, exercise})}
            //         className='exercise-button'>
            //         Update Exercise
            //     </button>
            // )
        } else {
            deleteExercise = () => (
                null
            )
        }

        let allExercises;

        allExercises = this.props.allExercises.map( (exercise) => 
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
                {/* {updateExerciseButton(exercise)} */}
            </div>
            )


        // mainShow = this.state.option ? <NewExerciseContainer/> : <ExerciseContainer exerciseId={this.state.i}/>;

        if (this.state.option) {
            mainShow = <NewExerciseContainer/>
        // } else if (this.state.update) {
        //     mainShow = <UpdateExerciseContainer exercise={this.state.exercise}/>
        } else {
            mainShow = <ExerciseContainer exerciseId={this.state.i}/>
        }

        if(this.props.allExercises.length === 0 && mainShow) {
            mainShow = (
                <div>No Exercise available! please contact your clinician</div>
            )
        }

        return (
            <div className='profile-grid'>
                <div className='left-side-bar'>
                    <div className='exercises-index'>
                        {createExerciseButton}
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