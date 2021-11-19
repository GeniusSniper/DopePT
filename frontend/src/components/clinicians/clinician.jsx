import React from "react";
import Cat from "../../styles/images/cat1.jpg";
import "../../styles/clinicians.css";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer";

class Clinician extends React.Component {
  // constructor(props){
  //     super(props)
  // }
  componentDidMount() {
    this.props.requestConnection("patients", this.props.currentUser.id);
  }

  render() {
    let avatar = createAvatar(style, {
      seed: this.props.clinician.handle,
      size: 192,
    });
    return (
      <div className="clinician-container">
        <div className="clinician">
          <div
            className="avatar"
            dangerouslySetInnerHTML={{ __html: avatar }}
          ></div>
          <h2 className="clinician-name">{this.props.clinician.handle}</h2>
        </div>
        <div className="clinician-info">
          <p>Contact info:</p>
          <p>Phone #: (555)-555-5555</p>
          <p>Fax #: (555)-555-5555</p>
          <p>Email: {this.props.clinician.handle}@email.com</p>
        </div>
      </div>
    );
  }
}

export default Clinician;
