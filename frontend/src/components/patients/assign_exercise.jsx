import React from 'react';

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
            <li key={exercise._id}>
                {exercise.title}
            </li>
        ))

        let renderAll = allExercises.map(exercise => (
            <li key={exercise._id}>
                <div>
                    {exercise.title}
                </div>
                <div>
                    {exercise.button}
                </div>
            </li>
        ))

        return (
            <div>
                <div>
                    {patientExe}
                </div>
                <div> all exercises
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