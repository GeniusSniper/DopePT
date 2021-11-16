import React from 'react';
import multiavatar from '@multiavatar/multiavatar';


class UserProfile extends React.Component {
    render(){
        if(!this.props.user) return null;
        let avatar = () => {
            let avatarClass = document.querySelector('.avatar');
            console.log(avatarClass);
            // avatarClass.innerHTML = multiavatar(); 
        }
        return (
            <div>
                <div className='avatar'></div>
                {avatar()}
            </div>
        )
    }
}

export default UserProfile;