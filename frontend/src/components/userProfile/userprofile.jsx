import React from 'react';
import multiavatar from '@multiavatar/multiavatar';


class UserProfile extends React.Component {
    render(){
        let avatar = () => {
            let avatarClass = document.querySelector('.avatar');
            avatarClass.innerHTML = multiavatar('  '); 
        }
        return (
            <div>
                <div className='avatar'>{avatar()}</div>
            </div>
        )
    }
}

export default UserProfile;