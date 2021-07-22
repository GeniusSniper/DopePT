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
        const allExercises = this.props.allExercises.map( (exercise, j) => 
            <ul key={exercise._id} onClick={() => this.setState({i: j })}>
                <div className='exercise-title-index'>
                    {exercise.title}
                </div>
                <div className='exercise-description'>
                    {exercise.description}
                </div>
            </ul> 
            )
        let option, mainShow;

        if(this.props.userType === 'clinicians'){
            option = <button 
            onClick={() => this.setState({option: !this.state.option})}>
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