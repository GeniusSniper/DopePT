import React from 'react';

class Exercise extends React.Component{
    componentDidMount(){
        let props = this.props;
        props.requestExercise(
            props.match.params.userType, 
            props.match.params.exerciseId
        );
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