import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="Login">
        <div className="lander">
          <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter username:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          <p>Enter password:</p>
          <input
            type='password'
          />
          </form>
        </div>
      </div>
    );
  }
}