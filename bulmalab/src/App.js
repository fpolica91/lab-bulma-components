import React, { Component } from 'react';
import NavBar from "./components/navbar"
import FormField from './components/formField';
import Button from './components/button';
import SignUp from './components/signup';
import Message from './components/Message';


class App extends Component {
  state = {
    label: {
      name: "Name",
      email: "Email",
      password: "Password"
    },
    placeholder: {
      name: "Alex Smith",
      email: "alexSmith@gmail.com",
      password: "***********"
    },

  }
  render() {

    return (
      <div className="App" >
        <NavBar />
        <FormField
          label={this.state.label.name}
          placeholder={this.state.placeholder.name}
        />
        <FormField
          label={this.state.label.email}
          placeholder={this.state.placeholder.email}
        />
        <Button />

        <SignUp
          label={this.state.label}
          placeholder={this.state.placeholder}
        />

        <Message />


      </div>
    );
  }

}

export default App;
