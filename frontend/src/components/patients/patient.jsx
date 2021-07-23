import React from 'react'

class Patient extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         i: 0
    //     }
    // }

    // componentDidUpdate(prevProps,prevState) {
        // if(this.state.i !== prevState.i){
            // this.props.requestAllExercises('patients', this.props.patient._id);
        // }
    // }

    render() {
        let exercises = [];
        let indexOfAll = this.props.patient.exercises.map( exercise => exercise)
        this.props.allExercises.forEach(exercise => {
            if(indexOfAll.indexOf(exercise._id) !== -1) exercises.push(exercise);
        })
        
        let patientExe = exercises.map(exercise => (
            <li key={exercise._id}>
                {exercise.title}
            </li>
        ))

        return (
            <div className='patient-info'>
                <img src="" alt="" />
                <div>
                    {this.props.patient.handle}
                </div>
                <div>
                    {patientExe}
                </div>
            </div>
        )
    }
}

export default Patient