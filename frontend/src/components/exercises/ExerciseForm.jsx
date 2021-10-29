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

    async handleSubmit(e){
        e.preventDefault();
        // const imageFile = uploadImg(this.state.image, this.state.croppedArea);
        const canvas = await getCroppedImg(this.state.image, this.state.croppedArea);
        const canvasDataUrl = canvas.toDataURL("image/jpeg");
        const convertedUrlToFile = dataURLtoFile(
            canvasDataUrl,
            "cropped-image.jpeg"
        );

        const formdata = new FormData();
        formdata.append("croppedImage", convertedUrlToFile);

        // console.log(formdata);
        // return convertedUrlToFile;

        // const formdata = new FormData();
        // formdata.append('croppedImage', imageFile);
        
        // console.log(convertedUrlToFile, formdata.get('croppedImage'));
        const res = await fetch(`/api/uploadImages/exercises`, {
            method: "POST",
            body: formdata,
        });

        const res2 = await res.json();

        // console.log(res2.data);

        this.props.createExercise(this.props.userId,{
            title: this.state.title,
            description: this.state.description,
            instructions: this.state.instructions,
            urls: res2.data
        }).then(() => {
            this.setState({
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
                                <Button
                                    onClick={() => this.setState({image: null})}
                                    variant="contained"
                                    color="primary"
                                    style={{ marginRight: "10px" }}
                                >
                                    Clear
                                </Button>
                                <Button  variant='contained' color='primary' onClick={triggerFileSelect} style={{ marginRight: "10px" }}>
                                    Choose an image
                                </Button>
                                {/* <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {

                                    }}
                                    style={{ marginRight: "10px" }}
                                >
                                    Download
                                </Button> */}
                                {/* <Button variant="contained" color="secondary" 
                                    onClick={() => {

                                    }}
                                >
                                    Upload
                                </Button> */}
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

// const uploadImg = async (image, croppedArea) => {
//     const canvas = await getCroppedImg(image, croppedArea);
//     const canvasDataUrl = canvas.toDataURL("image/jpeg");
//     const convertedUrlToFile = dataURLtoFile(
//         canvasDataUrl,
//         "cropped-image.jpeg"
//     );

//     const formdata = new FormData();
//     formdata.append('croppedImage', convertedUrlToFile);

//     // console.log(formdata);
//     return convertedUrlToFile;
// }

const createImage = (url) =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(image));
		image.addEventListener("error", (error) => reject(error));
		image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
		image.src = url;
	});

const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
}

const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
	const image = await createImage(imageSrc);
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	const maxSize = Math.max(image.width, image.height);
	const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

	// set each dimensions to double largest dimension to allow for a safe area for the
	// image to rotate in without being clipped by canvas context
	canvas.width = safeArea;
	canvas.height = safeArea;

	// translate canvas context to a central location on image to allow rotating around the center.
	ctx.translate(safeArea / 2, safeArea / 2);
	ctx.rotate(getRadianAngle(rotation));
	ctx.translate(-safeArea / 2, -safeArea / 2);

	// draw rotated image and store data.
	ctx.drawImage(
		image,
		safeArea / 2 - image.width * 0.5,
		safeArea / 2 - image.height * 0.5
	);

	const data = ctx.getImageData(0, 0, safeArea, safeArea);

	// set canvas width to final desired crop size - this will clear existing context
	canvas.width = pixelCrop.width;
	canvas.height = pixelCrop.height;

	// paste generated rotate image with correct offsets for x,y crop values.
	ctx.putImageData(
		data,
		0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
		0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
	);

	// As Base64 string
	// return canvas.toDataURL("image/jpeg");
	return canvas;
}

const dataURLtoFile = (dataurl, filename) => {
	const arr = dataurl.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);

	while (n--) u8arr[n] = bstr.charCodeAt(n);

	return new File([u8arr], filename, { type: mime });
};
