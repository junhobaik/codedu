import React, { Component } from 'react';

import { Progress } from 'semantic-ui-react';

class ProgressBar extends Component {
    render() {
        const {number} = this.props;
        const totalNumber = 10;

        return (
            <div className='progress-wrap'>
              <Progress success value={number+1} total={totalNumber} progress='ratio' >
              </Progress>
            </div>
        );
    }
}

export default ProgressBar;
