import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { elements: [] }
  }


  //when clicked submit, run the login function and get the TODOS
  submit = () => {
    this.login();
    this.getTodos();
  }

  login = () => {
    var usr = this.username.value;
    var pwd = this.password.value;

    console.log("username", usr);
    console.log("password", pwd);

    fetch('/login', { method: "POST", body: JSON.stringify({ username: usr, password: pwd }) })
      .then(x => x.text())
      .then(x => {
        this.setState({ attemptedLogin: true, outcome: x })
        this.processLoginResponse;
        this.username = usr;
        this.password = pwd;
      })
  }

  processLoginResponse = (response) => {
    console.log(response)
    if (response !== "success") {
      this.setState({ loginFailed: true });
      return;
    }
    this.setState({ ready: true })

  }

  getTodos = () => {
    fetch('/todos', { method: 'POST', body: JSON.stringify(this.username.value) })
      .then(x => x.json())
      .then(x => { this.setState({ elements: x }) })
  }

  add = () => {
    console.log(this.username, this.password);
    fetch('/addTodo', { method: 'POST', body: JSON.stringify({ username: this.username, inputValue: this.inp.value }) })
      .then(x => x.text())
      .then(() => console.log('new element added'))
    this.setState(st => { return { elements: st.elements.concat(this.inp.value) } })
  }

  clear = () => {
    fetch('/clearTodo', { method: 'POST' })
    this.setState({ elements: [] })
  }

  loggedIn = () => {
    return (<div>{this.state.outcome === "success" ? this.populateTodo() : "failed login"}</div>);
  }

  loginForm = () => {
    return (<div>
      <h1> Login form</h1>
      <input ref={r => this.username = r} placeholder="username" name="username" /><br />
      <input ref={r => this.password = r} placeholder="password" name="password" /><br />
      <button onClick={this.submit} >Log In</button>
    </div>);
  }

  populateTodo = () => {

    return <div><input ref={r => this.inp = r}></input>
      <button onClick={this.add}>Add it </button>
      <button onClick={this.clear}>Clear it</button>
      {this.state.elements.map(x => (<li> {x} </li>))}</div>
  }

  homepage = () => {
    return (
      <div className="App">
        <button onClick={this.loginForm}>Login</button>
        <button onClick={this.click}>Sign Up</button>
      </div>
    )
  }
  render() {
    if (!this.state.ready) {
      return (<div className="App">
        <input ref={r => this.username = r} placeholder="username" name="username" /><br />
        <input ref={r => this.password = r} placeholder="password" name="password" /><br />
        <button onClick={this.submit}> Login </button>
        <button onClick={this.signup}> Signup </button>
      </div>)
    } else {
      this.populateTodo();
    }

  }
}

export default App;
