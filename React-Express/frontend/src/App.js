import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { elements: [] }
  }
  componentDidMount() {
    fetch('/todos')
      .then(x => x.json())
      .then(x => this.setState({ elements: x }))
  }

  submit = () => {
    var usr = this.username.value; //get inputted value of username
    var pwd = this.password.value;//get inputted vale of password
    this.name = usr;

    console.log("the username", this.name);
    console.log("username", usr);
    console.log("password", pwd);
    
    fetch('/login', {
      method: "POST",
      body: JSON.stringify({
        username: usr,
        password: pwd
      })
    })
      .then(x => x.text())
      .then(x => {
        this.setState({ attemptedLogin: true, outcome: x })
      })

  }
  add = () => {
    fetch('/addTodo', { method: 'POST', body: JSON.stringify(this.inp.value) })
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
      <input ref={r => this.username = r} placeholder="username" name="username" /><br/>
      <input ref={r => this.password = r} placeholder="password" name="password" /><br/>
      <button onClick={this.submit} > submit </button>
    </div>);
  }

  populateTodo = () => {
    return <div><input ref={r => this.inp = r}></input>
      <button onClick={this.add}>Add it </button>
      <button onClick={this.clear}>Clear it</button>
      {this.state.elements.map(x => (<li> {x} </li>))}</div>
  }
  render() {
    return (
      <div className="App">
        {this.state.attemptedLogin ? this.loggedIn() : this.loginForm()}
      </div>
    );
  }

}

export default App;
