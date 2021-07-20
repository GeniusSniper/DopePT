import React from 'react';

class Exercises extends React.Component{
    componentDidMount(){
        this.props.requestAllExercises(this.props.match.params.userType);
    }

    render(){
        
        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
};

export default Exercises;