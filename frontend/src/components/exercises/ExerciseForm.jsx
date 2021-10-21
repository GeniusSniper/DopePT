import React from 'react';
import '../../styles/exercise_form.css';
import Button from "@material-ui/core/Button";

class ExerciseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            errors: {},
            instructions: '',
            urls: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getConnection('clinicians', this.props.userId);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors});
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createExercise(this.userId, this.state)
        .then(() => {
            this.setState({
                title: '',
                description: '',
                errors: {},
                instructions: '',
                urls: []
            })
        })
    }

    renderErrors() {
        if(this.props.errors.session.length ===0 ) return null;
        return(
          <>
            {Object.values(this.props.errors.session).map((error, i) => (
              <li key={`error-${i}`}>
                {/* {this.state.errors[error]} */}
                {error}
              </li>
            ))}
          </>
        );
    }

    render(){
        return (
            <div>
                <form className='create-exercise-form' onSubmit={this.handleSubmit}>
                    <h2>
                        Create a New Exercise!
                    </h2>
                    <br />
                    <div>
                        <input type="file" accept="image/*" style={{display: 'none'}} />
                        <Button  variant='contained' color='primary'>
                            Choose
                        </Button>
                    </div>
                    <label>Title:
                        <br />
                        <input type="text" value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>
                    <label>Description:
                        <br />
                        <textarea value={this.state.description}
                            onChange={this.update('description')}
                            rows={5}
                            cols={32}
                        />
                    </label>
                    <label>Instructions:
                        <br />
                        <textarea value={this.state.instructions}
                            onChange={this.update('instructions')}
                            rows={5}
                            cols={32}
                        />
                    </label>
                    {/* <label>Picture:
                        <input type="text" value={this.state.urls}
                            onChange={this.update('urls')}
                        />
                    </label> */}
                    {this.renderErrors()}
                    <button>Create Exercise</button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm;