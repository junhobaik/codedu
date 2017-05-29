import React, { Component } from 'react';
import json2md from 'json2md';
import ReactMarkdown from 'react-markdown';

class Content extends Component {
	constructor(props){
		super();
	}
	render() {
		const { number, problem, checkAnswer, onClickDisable } = this.props;
		console.log(onClickDisable);
		let content = null;
		let items = null;

		if (problem) {
			content = problem[number].content;
			content = json2md(content);
			items = problem[number].items.map((value, index) => {
				return (<li className='items btn-hover' refs={index} key={index} onClick={onClickDisable ? null : checkAnswer.bind(this, index)}>{value}</li>)
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
