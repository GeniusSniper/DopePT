import React from 'react';

class ExerciseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            instructions: '',
            urls: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getConnection('clinicians', this.props.userId);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.porps.createExercise(this.userId, this.state)
    }

    renderErrors() {
        return(
          <ul>
            {Object.keys(this.state.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {this.state.errors[error]}
              </li>
            ))}
          </ul>
        );
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <label>Description:
                        <input type="text" value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>
                    <label>Instructions:
                        <input type="text" value={this.state.instructions}
                            onChange={this.update('instructions')}
                        />
                    </label>
                    {/* <label>Picture:
                        <input type="text" value={this.state.urls}
                            onChange={this.update('urls')}
                        />
                    </label> */}
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default ExerciseForm;