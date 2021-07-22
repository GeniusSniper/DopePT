import React from 'react';
import ExerciseContainer from './exercise_container';
import '../../styles/profile.css';

class Exercises extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i: 0,
            title: '',
            description: '',
        }

        // this.generateExerciseForm = this.generateExerciseForm.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount(){
        let props = this.props;
        props.requestAllExercises(
            props.userType,
            props.currentUserId
        );
    }

    // submitForm(e){
    //     e.preventDefault();
    //     // let exercise = Object.assign({}, );
    //     this.props.createExercise(this.props.currentUserId, this.state);
    // }

    // generateExerciseForm(){
    //     return (
    //         <form onSubmit={this.submitForm}>
    //             <label>Title:
    //                 <input type="text" 
    //                 onClick={e => this.setState({[title]: e.target.value})}/>
    //             </label>
    //             <label>Description:
    //                 <input type="text" 
    //                 onClick={e => this.setState({[description]: e.target.value})}/>
    //             </label>
    //             <button>Create Exercise</button>
    //         </form>
    //     )
    // }

    render(){
        if(this.props.allExercises.length === 0) return null;
        const allExercises = this.props.allExercises.map( (exercise, j) => <ul key={exercise._id} onClick={() => this.setState({i: j })}>
                <div className='exercise-title-index'>
                    {exercise.title}
                </div>
                <div className='exercise-description'>
                    {exercise.description}
                </div>
            </ul> 
            )
        // let ableToCreate = () => null;
        // if(this.props.userType === 'clinicians') {
        //     ableToCreate = () => {
        //         return (
        //             <div><button>Create Exerise</button></div>
        //         )
        //     }
        // }
        return (
            <div className='profile-grid'>
                <div className='left-side-bar'>
                    <div className='exercises-index'>
                        {allExercises}
                    </div>
                </div>
                <div className='main-show'>
                    <div className='exercise-show'>
                        <ExerciseContainer exerciseId={this.state.i}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Exercises;