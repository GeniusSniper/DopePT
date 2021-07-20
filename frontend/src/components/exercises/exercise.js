import React from 'react';

class Exercise extends React.Component{
    componentDidMount(){
        this.props.requestExercise(this.props.match.params.userType, this.props.match.params.exerciseId);
    }

    render(){
        
        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
};

export default Exercise;