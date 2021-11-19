import React from "react";
// import multiavatar from '@multiavatar/multiavatar';
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      avatar: createAvatar(style, {
        seed: props.user.handle,
        size: 192,
      }),
      handle: props.user.handle,
      email: props.user.email,
      phone: props.user.phone,
    };
  }

  render() {
    let info = this.state.edit
      ? () => (
          <form>
            <div>
              Handle:
              <input
                onChange={(e) => {
                  this.setState({
                    handle: e.target.value,
                    avatar: createAvatar(style, {
                      seed: e.target.value,
                      size: 192,
                    }),
                  });
                }}
                type="text"
                value={this.state.handle}
              />
            </div>
            <div>
              Email:
              <input
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                type="text"
                value={this.state.email}
              />
            </div>
            <div>
              Phone:
              <input
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                type="text"
                value={this.state.phone}
              />
            </div>
          </form>
        )
      : () => (
          <div>
            <div>Handle: {this.state.handle}</div>
            <div>Email: {this.state.email}</div>
            <div>Phone: {this.state.phone}</div>
          </div>
        );
    return (
      <div>
        <div
          className="userProfileAvatar"
          dangerouslySetInnerHTML={{ __html: this.state.avatar }}
        ></div>
        <div>{info()}</div>
      </div>
    );
  }
}

export default UserProfile;
