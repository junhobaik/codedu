import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 
import {Link} from 'react-router';


class Test extends Component {
    render() {
        console.log("test progress is", this.props.progress);
        return (
            <div className="test-button">
                <Link to={"/study/"+this.props.title+"&parttest"}>
                    <Button
                        className={this.props.progress === 1 ? 'test-button quiz-done' : 'test-button quiz-not-done'}>
                        TEST
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Test;