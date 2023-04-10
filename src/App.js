import React, { Component } from 'react';
import { Question } from './components';

const category = '';
const TRIVIA_API = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { question: null }
    // console.log(this.state.question)
  }

  componentDidMount() {
    fetch(TRIVIA_API)
        .then(res => res.json())
        .then(question => this.setState({question: question.results[0]}))
        // console.log(TRIVIA_API)
  }

  
  render() {
    return (
      <div className='container l:w-50 p-5'>
        <h1 className='display-1'>Trivia</h1>
        <h2 className='fw-lighter fs-5 mb-4'>
          (we couldn&lsquo;t think of a better name,{' '}
          <span className='fw-bolder'>sorry</span>)
        </h2>
        <hr />
        <div>
          {/* Render question here */}
          {this.state.question && <Question question={this.state.question} />}
        </div>
      </div>
    );
  }
}

export { App };
