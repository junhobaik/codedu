import React, { Component } from 'react';
import json2md from 'json2md';
import ReactMarkdown from 'react-markdown';

class Content extends Component {
	render() {
		const { number, problem, checkAnswer } = this.props;
		let content = null;
		let items = null;

		if (problem) {
			content = problem[number].content;
			content = json2md(content);
			items = problem[number].items.map((value, index) => {
				return (<li className='items' refs={index} key={index} onClick={checkAnswer.bind(this, index)}>{value}</li>)
			});
		}

		return (
			<div className='content-wrap'>
				<div className='problem'>
					<ReactMarkdown className="markdown" source={content} />
				</div>
				<div className='space'></div>
				<ul>
					{items}
				</ul>

			</div>
		);
	}
}

export default Content;
