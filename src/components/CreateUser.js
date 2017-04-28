import React, {Component} from 'react';

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      occupation: ""
    };
  }
  render () {
    console.log('testing');
    return (
      <div>
      <input value={this.state.firstName} onChange={(e) => {
        this.setState({firstName: e.target.value});
      }}/>
      <input value={this.state.lastName} onChange={(e) => {
        this.setState({lastName: e.target.value});
      }}/>
      <input value={this.state.address} onChange={(e) => {
        this.setState({address: e.target.value});
      }}/>
      <input value={this.state.phone} onChange={(e) => {
        this.setState({phone: e.target.value});
      }}/>
      <input value={this.state.occupation} onChange={(e) => {
        this.setState({occupation: e.target.value});
      }}/>
    <button onClick={()=>{console.log(this.state);}}> submit </button>
    </div>
    );
  }
}

export default CreateUser;
