import React from 'react';
import Cat from '../../styles/images/cat1.jpg';
import '../../styles/profile.css';
import ExercisesContainer from '../exercises/exercises_container';

class userProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    compoentDidMount(){
        //fetch the user
    }

    render() {
        if (!this.props.user) return null;
        return (
            <div className='user-profile-container'>
                <div className='patient-info-bar'>
                    <img className='profile-picture' src={Cat}/>
                    <h1>Hello, {this.props.user.handle}!</h1>
                </div>
                <ExercisesContainer userType={this.props.userType}/>
            </div>
        )
    }
}

export default userProfile;