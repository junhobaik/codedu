import React, { Component } from 'react';

class Content extends Component {
	render() {
		const { number, problem, checkAnswer } = this.props;
		let content = null;
		let items = null;
		if (problem) {
			content = problem[number].content;
			items = problem[number].items.map((value, index) => {
				return (<li className='items' key={index} onClick={checkAnswer.bind(this, index)}>{value}</li>)
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

export default Content;
