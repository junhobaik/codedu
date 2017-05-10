import React, { Component, PropTypes } from 'react';

class Content extends Component {
    render() {
        const {problem} = this.props;
        let content = null;
        let answer = null;
        let items = null;
        const number = 3;
        if(problem) {
            content = problem[number].content;
            answer = problem[number].answer;
            items = problem[number].items.map((value, index) => {
                return (<li className='items' key={index}>{value}</li>)
            });
        }
        

        return (
            <div className='content-wrap'>
                <div className='problem'>
                    {content}
                </div>
               <ul>
                    {items}
                </ul>
               
            </div>
        );
    }
}

Content.propTypes = {

};

export default Content;
