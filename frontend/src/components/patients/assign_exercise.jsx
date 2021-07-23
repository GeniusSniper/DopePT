import React from 'react';
import '../../styles/assign_exercises.css';

class AssignExercise extends React.Component {
    render(){
        let props = this.props;
        let exercises = [];
        let allExercises = [];
        let indexOfAll = props.patient.exercises.map( exercise => exercise)
        props.allExercises.forEach(exercise => {
            if(indexOfAll.indexOf(exercise._id) !== -1) {
                exercises.push(exercise);
                allExercises.push(exercise);
            } else {
                exercise.button = (
                    <div onClick={() => {
                        // button.style.display = "none";
                        // patientExe.push(
                        //     <li key={exercise._id}>{exercise.title}</li>
                        // );
                        props.assignExercise(exercise._id, props.patient._id);}
                    }>
                        {/* <Button true='true' onClick={() => this.true = undefined}/> */}
                        <button>
                            Assign this Exercise
                        </button>
                    </div>
                )
                allExercises.push(exercise);
            };
        })
        
        let patientExe = exercises.map(exercise => (
            <div className='mapped-exercises' key={exercise._id}>
                {exercise.title}
            </div>
        ))

        let renderAll = allExercises.map(exercise => (
            <div className='mapped-exercises' key={exercise._id}>
                <div>
                    {exercise.title}
                </div>
                <div className='assign-button'>
                    {exercise.button}
                </div>
                <br />
            </div>
        ))

        return (
            <div className='assign-exercise-container'>
                <div className='patient-exercises-list'>
                    <p className='exercise-list-title'>{this.props.patient.handle}'s Exercises</p>
                    {patientExe}
                </div>
                <div className='all-exercises-list'> 
                    <p className='exercise-list-title'>All Exercises</p>
                    {renderAll}
                </div>
            </div>
        )
    }
}

export default AssignExercise;


// const Button = props => {
//     if(props.true){
//         return(
//             <button>
//                 Assign this Exercise
//             </button>
//         )
//     }
//     return null;
// }