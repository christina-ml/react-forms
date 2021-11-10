import { Component } from 'react';

class UserInfoForm extends Component {
  constructor(){
    super();

    this.state = {
      notARobot: false,
    }
  }

  handleFormSubmit=(event) => {
    event.preventDefault();
    console.log("Submit trigger");
  }

  handleCheckboxChange=(event) => {
    this.setState({
      notARobot: event.target.checked,
    })
    // console.log("Checkbox trigger")
  }

  render(){
    console.log(this.state)

    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <h2>User Information</h2>
        <label htmlFor="">
          Are you human?
          <input 
            id="not-robot"
            type="checkbox" 
            // checked={}
            onChange={this.handleCheckboxChange}
          />
        </label>


        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default UserInfoForm;