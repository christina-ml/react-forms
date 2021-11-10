import { Component } from 'react';


class UserInfoForm extends Component {

  handleFormSubmit=() => {
    console.log("trigger");
  }

    render(){
      return (
        <form onSubmit={this.handleFormSubmit} className="form-container">
          <h2>User Information</h2>
          
          <button type="submit">Submit</button>
        </form>
      )
    }
}

export default UserInfoForm;