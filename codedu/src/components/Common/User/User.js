import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
        <div className="user">
            <div className="user-name">userName</div>
            <div className="user-icon">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzPkKhDbKwS_6df4hkJTf1ABa4yQLQfQ9NHENiiMliS1Yqlifc" alt="icon"/>
            </div>
        </div>
    );
  }
}

export default User;