import React, { Component } from "react";

//import our service
import JeopardyService from "../../services/jeopardyService";
import JeopardyDisplay from "./JeopardyDisplay";

// function Jeopardy
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
      userInput: "",
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }

  isAnswerRight = (event) => {
    const userInput = this.state.userInput;
    let dataAnswer = this.state.data.answer;
    if (dataAnswer.includes("<i>")) {
      dataAnswer = dataAnswer.substring(3, dataAnswer.length - 4);
    }
    if (Object.is(userInput.toLowerCase(), dataAnswer.toLowerCase())) {
      this.setState({
        score: this.state.score + this.state.data.value,
      });
    } else {
      this.setState({
        score: this.state.score - this.state.data.value,
      });
    }
    this.reinitializeState();
  };

  handleChange = (event) => {
    let userInput = { ...this.state.userInput };
    userInput = event.target.value;
    this.setState({
      userInput,
    });
  };

  reinitializeState = (event) => {
    this.setState({
      data: { category: {} },
      userInput: "",
      jReaction: false,
      jPassFail: "",
    });
    this.getNewQuestion();
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  //display the results on the screen
  render() {
    return (
      <JeopardyDisplay
        data={this.state.data}
        score={this.state.score}
        userInput={this.state.userInput}
        isAnswerRight={this.isAnswerRight}
        handleChange={this.handleChange}
        reinitializeState={this.reinitializeState}
      />
    );
  }
}

export default Jeopardy;
