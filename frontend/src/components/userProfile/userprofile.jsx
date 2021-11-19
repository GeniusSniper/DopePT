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
      }),
      handle: props.user.handle,
      email: props.user.email,
      phone: props.user.phone,
    };
  }

  render() {
    return (
      <div>
        <div
          className="userProfileAvatar"
          dangerouslySetInnerHTML={{ __html: this.state.avatar }}
        ></div>
        <div>
          <div>
            Handle:
            <input readonly type="text" value={this.state.handle} />
          </div>
          <div>
            Email:
            <input readonly type="text" value={this.state.email} />
          </div>
          <div>
            Phone:
            <input readonly type="text" value={this.state.phone} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
