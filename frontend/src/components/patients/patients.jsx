import React from "react";

class Patients extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.patients.map(patient => (
                    <h2>{patient.handle}</h2>
                )
                )}
            </div>
        )
    }
}

export default Patients;