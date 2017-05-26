import React from 'react';

class Message extends React.Component {
  render() {

    const {rightAnswer , totalAnswer} = this.props;

    return (
      <div className="result-message">
          <p>정답 : {rightAnswer} / {totalAnswer}</p>
          {rightAnswer <= Math.floor(totalAnswer / 2) ? <p>다시 공부하세요!</p> : <p>퀴즈를 통과했습니다.</p>}
      </div>
    )
  }
}

export default Message;
