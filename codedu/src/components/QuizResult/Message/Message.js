import React from 'react';

class Message extends React.Component {
  render() {

    const {rightAnswer , totalAnswer} = this.props;

    return (
      <div className="result-message">
          <p>정답 : {rightAnswer} / {totalAnswer}</p>
          <p>다시 공부하세요</p>
      </div>
    )
  }
}

export default Message;
