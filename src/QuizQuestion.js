import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonText) {
		if (this.props.quiz_question.answer === buttonText) {
			this.props.showNextQuestionHandler();
		}
	}

	render() {
		return (
			<main>
				<section>
					<p>{ this.props.quiz_question.instruction_text }</p>
				</section>
				<section className="buttons">
					<ul>
						{ this.props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton key={ index } clickHandler={ this.handleClick } button_text={ answer_option } /> ) } />
					</ul>
				</section>
			</main>
		);
	}
}

export default QuizQuestion;
