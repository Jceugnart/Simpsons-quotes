import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes";
import Lamp from "./lamp";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      true: props.true,
      message : props.true
    };
  }
  handleClick = () => {
    this.setState({ true: !this.state.true});
  };
  render() {
    const workingHommer = this.state.true ? 'App-logo' : 'App-logo-off';
    const message = this.state.true ? 'Hommer travail' : 'Hommer ne travail pas !'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className = {workingHommer} alt="logo" />
          <div className="Working">
          <button 
          onClick={this.handleClick}
          className = "bouton"
          >
          {message.toUpperCase()}
          </button>
          <figure className={workingHommer} />
      </div>
            <Lamp on />
            <Lamp />
            <Quotes />
        </header>
      </div>
    );
  }
}
export default App;
