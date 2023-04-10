import React from 'react';
import { AnswerButton } from './';
import { decodeHTML, randomizeArray } from '../lib';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessed: false,
      guess: '',
    };

    // convert all answers into a single array, and randomize the array
    this.answers = randomizeArray([
      ...props.question.incorrect_answers,
      props.question.correct_answer,
    ]);
    }
  handleGuess = (answer) => {
    // set guessed to true, and set guess to the selected answer
    this.setState({ guessed: true, guess: answer.target.textContent });
  };

  render() {
    return (
      <div className='card p-2 mb-4'>
        <h3 className='fw-lighter fs-5 mb-4'>{this.props.question.category}</h3>
        <h4 className='fw-light fs-5 mb-4'>
          {decodeHTML(this.props.question.question)}
        </h4>

        <div>
          {this.answers.map((answer) => (
            <AnswerButton
              key={answer}
              answer={answer}
            handleGuess={this.handleGuess}

            />
          ))}
        </div>
  
    {

this.state.guessed && this.state.guess === this.props.question.correct_answer ? (<div>
    <h1>Correct!</h1> </div> ) 
    : 
this.state.guessed && this.state.guess !== this.props.question.correct_answer ? <h1>Incorrect! The correct answer is {decodeHTML(this.props.question.correct_answer)}</h1> : ""

}
</div>
);
}
}

export { Question };
