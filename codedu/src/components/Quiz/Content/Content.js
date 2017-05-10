import React, { Component, PropTypes } from 'react';

class Content extends Component {
    render() {
        const {number, problem} = this.props;
        let content = null;
        let answer = null;
        let items = null;
        const num = number;
        if(problem) {
            content = problem[num].content;
            answer = problem[num].answer;
            items = problem[num].items.map((value, index) => {
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
