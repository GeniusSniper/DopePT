import React from 'react'

class Patient extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         i: 0
    //     }
    // }

    componentDidUpdate(prevProps,prevState) {
        // if(this.state.i !== prevState.i){
        //     this.props.requestAllExercises('patients', this.props.patient._id);
        // }
    }

    render() {
        return (
            <div className='patient-info'>
                <img src="" alt="" />
                <div>
                    {this.props.patient.handle}
                </div>
                <div>
                    {this.props.allExercises.map(exercise => (
                        <li key={exercise._id}>
                            {exercise.title}
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default Patient