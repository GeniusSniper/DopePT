import React from 'react';
import '../../styles/exercise_form.css';
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";

class ExerciseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            errors: {},
            instructions: '',
            urls: [],
            image: null,
            croppedArea: null,
            crop: {
                x: 0,
                y: 0
            },
            zoom: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectFile = this.onSelectFile.bind(this);
        this.onCropComplete = this.onCropComplete.bind(this);
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

    onSelectFile(e){
        let file = document.getElementById('get_file').files
        if (file && file.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.addEventListener("load", () => {
              this.setState({ image: reader.result})
            });
          }
    }

    onCropComplete(croppedAreaPercentage, croppedAreaPixel){
        this.setState({croppedArea: croppedAreaPixel})
    }

    render(){
        // const inputRef = React.useRef();

        // const triggerFileSelectPopup = () => inputRef.current.click();

        let triggerFileSelect = () => document.getElementById('get_file').click();

        return (
            <div>
                <form className='create-exercise-form' onSubmit={this.handleSubmit}>
                    <h2>
                        Create a New Exercise!
                    </h2>
                    <br />
                    <div className="container">
                        <div  className="container-cropper">
                            {
                                this.state.image ? 
                                <>
                                    <div className="cropper">
                                        <Cropper 
                                            image={this.state.image} 
                                            crop={this.state.crop} 
                                            zoom={this.state.zoom} 
                                            accept={1} 
                                            onCropChange={v => this.setState({crop: v})} 
                                            onZoomChange={v => this.setState({zoom: v})} 
                                            onCropComplete={this.onCropComplete} 
                                        />
                                    </div>
                                    <div className="slider">
                                        <Slider 
                                            min={1}
                                            max={3}
                                            step={0.1}
                                            value={this.state.zoom}
                                            onChange={(e, zoom) => this.setState({zoom: zoom})}
                                            color='secondary'
                                        />
                                    </div>
                                </> :
                                null
                            }
                        </div>
                        <div className="container-buttons">
                            <div className='buttons'>
                                <input type="file" accept="image/*" 
                                    style={{display: 'none'}} 
                                    id='get_file' onChange={this.onSelectFile} 
                                />
                                <Button  variant='contained' color='primary' onClick={triggerFileSelect}>
                                    Choose
                                </Button>
                            </div>
                        </div>
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