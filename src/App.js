import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: null,
      quotes: [
        {
          text: "Don't get hit by a bus... you might get isekai'ed.",
          author: "Kazuma"
        },
        {
          text: "I thought he was the one, but she was wrong.",
          author: "Rem"
        },
        {
          text: "I won't let you have my best friend!",
          author: "Kanna-chan"
        },
        {
          text: "Count backwards from one thousand.",
          author: "Kaneki Ken"
        },
        {
          text: "I will send you back to the depths of Hades.",
          author: "Kratos"
        },
        {
          text: "I love you dangerously",
          author: "Charlie Puth"
        }
      ]
    };
    this.updateCurrentQuote = this.updateCurrentQuote.bind(this);
  }
  
  updateCurrentQuote() {

    let { floor, random }   = Math;
    
    this.setState(state => {

      let { quotes, current } = state;
      let index = floor(random() * quotes.length);
      let next  = quotes[index];

      if (next === current) {
        this.updateCurrentQuote();
        return state;
      }

      return { current: next };

    });
  }
  
  componentWillMount() {
    console.log("Component is mounting.")
    this.updateCurrentQuote();
  }
  
  render() {
    let { text, author } = this.state.current;
    return (
      <section id="quote-box" className="jumbotron">
        <div>
          <h2 id="text">{text}</h2>
          <p id="author">-{author}</p>
        </div>
        <div>
          <a id="tweet-quote"
            className="btn btn-primary"
            href="twitter.com/intent/tweet"
          ><i className="fa fa-twitter"></i>
          </a>
          <button
            id="new-quote"
            className="btn btn-primary"
            onClick={this.updateCurrentQuote}
          >
            New Quote
          </button>
        </div>
      </section>
    );
  }
}

export default App;
