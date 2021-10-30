import React from 'react';
import Cat from '../../styles/images/cat1.jpg';
import '../../styles/profile.css';
import ExercisesContainer from '../exercises/exercises_container';
import ReactCalendar from '../calendar/calendar';
import PatientsContainer from '../patients/patients_container'
import CliniciansContainer from '../clinicians/clinician_container';
import 'react-calendar/dist/Calendar.css';

class SwitchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebar: 'exercises',
        }

        this.switchTabs = this.switchTabs.bind(this)
    }

    renderSidebar() {
        switch (this.state.sidebar) {
            case 'exercises':
                return <ExercisesContainer userType={this.props.userType}/>
            case 'patients':
                return <PatientsContainer/>
            case 'clinician':
                return <CliniciansContainer/>
            case 'calendar':
                return <ReactCalendar/>
            default:
                break;
        }
    }

    switchTabs() {
        if (this.props.isDoctor){
            this.setState({
                sidebar: 'patients'
            })
        } else {
            this.setState({
                sidebar: 'clinician'
            })
        }
    }

    render() {
        if (!this.props.user) return null;
        return (
            <div className='user-profile-container'>
                <div className='patient-info-bar'>
                    <img className='profile-picture' src={Cat} alt='img'/>
                    <h1>Hello, {this.props.user.handle}!</h1>
                </div>
                <div className='navigation-tabs'>
                    <div 
                        onClick={() => this.setState({
                            sidebar: 'exercises'
                        })}>
                        Exercises
                    </div>
                    <div 
                        onClick={this.switchTabs}>
                        {this.props.isDoctor ? 'Patients' : 'Clinician'}
                    </div>
                    <div 
                        onClick={() => this.setState({
                            sidebar: 'calendar'
                        })}>
                        Calendar
                    </div>
                </div>
                {this.renderSidebar()}
            </div>
        )
    }
}

export default SwitchBar;