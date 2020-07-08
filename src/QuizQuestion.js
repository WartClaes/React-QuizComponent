import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

	constructor(props) {
		super(props);

		this.state = {
			incorrectAnswer: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonText) {
		const correctAnswer = this.props.quiz_question.answer === buttonText;

		if (correctAnswer) {
			this.props.showNextQuestionHandler();
		}

		this.setState({
			incorrectAnswer: !correctAnswer,
		});
	}

	render() {
		return (
			<main>
				<section>
					<p>{ this.props.quiz_question.instruction_text }</p>
				</section>
				<section className="buttons">
					<ul>
						{ this.props.quiz_question.answer_options.map((answer_option, index) => <QuizQuestionButton key={ index } clickHandler={ this.handleClick } button_text={ answer_option } /> ) }
					</ul>
				</section>
				{ this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
			</main>
		);
	}
}

export default QuizQuestion;
