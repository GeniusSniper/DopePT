import React from 'react'
import Cat from '../../styles/images/cat1.jpg'
import '../../styles/profile.css'

class userProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.user) return null;
        return (
            <div className='user-profile-container'>
                <div className='patient-info-bar'>
                    <img className='profile-picture' src={Cat}/>
                    <h1>Hello, {this.props.user.handle}!</h1>
                </div>
                <div className='profile-grid'>
                    <div className='left-side-bar'>
                        <h3>Left Side Bar</h3>
                    </div>
                    <div className='main-show'>
                        <h3>Main Show</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default userProfile;