import React, { Component, PropTypes } from 'react';

import { Progress } from 'semantic-ui-react';

class ProgressBar extends Component {
    render() {
        return (
            <div className='progress-wrap'>
              <Progress success value='3' total='5' progress='ratio' >
              </Progress>
            </div>
        );
    }
}

Progress.propTypes = {

};

export default ProgressBar;