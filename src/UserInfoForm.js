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

  handleCheckboxChange=() => {
    console.log("Checkbox trigger")
  }

  render(){
    console.log(this.state)

    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <h2>User Information</h2>
        
        {/* Make a checkbox */}
        <input 
          id="not-robot"
          type="checkbox" 
          // checked={}
          onChange={this.handleCheckboxChange}
        />


        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default UserInfoForm;