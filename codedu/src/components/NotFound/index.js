import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="notfound-wrap">
                    <p>404 Not Found (임시 페이지)</p>
                    <p>페이지를 찾을 수 없습니다.</p>
            </div>
        );
    }
}

export default NotFound;