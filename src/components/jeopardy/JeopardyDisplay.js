import React from "react";

function JeopardyDisplay(props) {
  return (
    <div>
      <strong>User's Score: </strong> {props.score} <br />
      <div className="category">
        <strong>Category: </strong> {props.data.category.title}
      </div>
      <strong>Value: </strong> {props.data.value} <br />
      <strong>Question: </strong> {props.data.question} <br />
      <label htmlFor="userInput">Your Answer: </label>
      <input
        type="text"
        name="userInput"
        placeholder="Enter the answer here..."
        onChange={props.handleChange}
      />
      <button type="submit" onClick={props.isAnswerRight}>
        Submit Answer
      </button>
      <br />
    </div>
  );
}

export default JeopardyDisplay;
