import React from 'react';
import { Progress } from 'semantic-ui-react';

class Experience extends React.Component {


  render() {

    const {userLevel, totalExp, gainExp} = this.props;

    return (
      <div className="result-exp">
        <div className="result-level">
            Lv. {userLevel}
        </div>
        <Progress percent={totalExp % 100} progress style={{margin: 0}}/>
        <div className="result-up">
            + {gainExp}%
        </div>
      </div>
    )
  }
}

export default Experience;