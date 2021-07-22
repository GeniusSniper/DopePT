import React from "react";
import '../../styles/profile.css';
import Patient from './patient_container'

class Patients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            i: 0,
        }
    }

    componentDidMount() {
        this.props.requestConnection(this.props.userType, this.props.currentUser.id);
    }

    render(){
        if(this.props.patients.length === 0) return null;
        const patients = this.props.patients.map( (patient, j) => 
            <ul key={patient._id} onClick={() => this.setState({i: j })}>
                <div className='patient-title-index'>
                    {patient.handle}
                </div>
            </ul> 
        )
        return (
            // <div>
            //     {this.props.patients.map(patient => (
            //         <h2>{patient.handle}</h2>
            //     )
            //     )}
            // </div>

            <div className='profile-grid'>
            <div className='left-side-bar'>
                <div className='patients-index'>
                    {patients}
                </div>
            </div>
            <div className='main-show'>
                <div className='exercise-show'>
                    <Patient patientId={this.state.i}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Patients;