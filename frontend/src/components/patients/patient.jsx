import React from 'react'
import Cat from '../../styles/images/cat1.jpg';


class Patient extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestAllExercises('patients', this.props.patient.id);
    }

    render() {
        if (!this.props.patient) return null;
        return (
            <div className='patient-info'>
                <img src={Cat} alt="" />
                <div>
                    {this.props.patient.handle}
                </div>
                <div>
                    {this.props.allExercises.map(exercise => (
                        <li>
                            {exercise.title}
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default Patient