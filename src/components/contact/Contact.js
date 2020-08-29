import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  handleReset = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <h2>Thank you for your submission</h2>
          <p>An agent will contact you soon.</p>
          <button type="reset" onClick={this.handleReset}>
            Reset Form
          </button>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              value={this.state.formData.firstName}
              name="firstName"
              required
              minLength={1}
              placeholder="Enter First name..."
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              value={this.state.formData.lastName}
              name="lastName"
              required
              minLength={1}
              placeholder="Enter Last name..."
              onChange={this.handleChange}
            />
          </div>
          <button>Submit Form</button>
        </form>
        <div>
          Full Name: {this.state.formData.firstName}{" "}
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
