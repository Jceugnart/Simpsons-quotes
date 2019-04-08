import React, { Component } from 'react';
import './App.css';
import GenerateQuotes from './coponents/GenerateQuotes';
import SimpsonsQuote from './coponents/SimpsonsQuote';

const quoteInfos = 
  {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image : 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png',
   characterDirection : "Left"
  }
;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteInfos
    };
  }
  
  getQuotes(){
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
    .then(response => response.json())
    .then(data => {
      this.setState({
        quote: data[0],
      });
    });
  }
  render() {
    return (
      <div className="App">
       <SimpsonsQuote quote={this.state.quote} />
       <GenerateQuotes selectQuotes={() => this.getQuotes()} />
      </div>
    );
  }
}
export default App;
