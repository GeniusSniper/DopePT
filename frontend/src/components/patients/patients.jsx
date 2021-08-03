import React from "react";
import '../../styles/profile.css';
import Patient from './patient_container';
import AssignExercise from './assignExercise_container';

class Patients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            i: 0,
            option: false
        }
    }

    componentDidMount() {
        this.props.requestConnection('clinicians', this.props.currentUser.id);
    }

    render(){
        if(this.props.patients.length === 0) return null;
        if(this.props.patients.isClinician) return null;
        const patients = this.props.patients.map( (patient, j) => 
            <div className='patient-index' key={patient._id}>
                <ul onClick={() => this.setState({i: j, option: false })}>
                    <div className='patient-title-index'>
                        {patient.handle}
                    </div>
                </ul>
                <button onClick={() => this.setState({i: j, option: true})}>
                    Assign Exercise
                </button>
            </div>
        )
        let option;
        option = this.state.option ? <AssignExercise key={this.state.i} patientIndex={this.state.i}/> : <Patient patientId={this.state.i}/>;
        return (
            <div className='profile-grid'>
            <div className='left-side-bar'>
                <div className='patients-index'>
                    {patients}
                </div>
            </div>
            <div className='main-show'>
                <div className='exercise-show'>
                    {option}
                </div>
            </div>
        </div>
        )
    }
}

export default Patients;