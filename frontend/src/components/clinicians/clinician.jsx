import React from 'react'
import Cat from '../../styles/images/cat1.jpg';
import '../../styles/clinicians.css';

class Clinician extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    componentDidMount() {
        this.props.requestConnection(this.props.userType, this.props.currentUser.id);
    }

    render() {
        debugger
        return(
            <div className='clinician-container'>
                <div className='clinician'>
                <img 
                    className='clinician-profile-picture' 
                    src={Cat} 
                    alt={'img'}
                />
                <h2 className='clinician-name'>
                    {this.props.clinician.handle}
                </h2>
                </div>
                <div className='clinician-info'>
                    <p>
                        Contact info:    
                    </p>
                    <p>
                        Phone #: (555)-555-5555
                    </p>
                    <p>
                        Fax #: (555)-555-5555
                    </p>
                    <p>
                        Email: {this.props.clinician.handle}@email.com
                    </p>
                </div>
            </div>
        )
    }
}

export default Clinician