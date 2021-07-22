import React from "react";

class Patients extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestConnection(this.props.userType, this.props.currentUser.id)
    }

    render(){
        debugger
        return (
            <div>
                {/* {this.props.patients.map(patient => (
                    <h2>{patient.handle}</h2> */}
                )
                )}
            </div>
        )
    }
}

export default Patients;