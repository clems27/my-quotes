import React, { Component } from "react";

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      random: null
    };
  }

  componentDidMount() {
    fetch(
      "https://clem-quote-server.glitch.me/quotes"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            quotes: result,
          });
        }
      )
   }
  getRandom = () => {
    let randomNumber = Math.random() 
  this.setState({
    random: randomNumber
  })
  }

   render() {
    const myArray = this.state.quotes.map( randomQuote=> {
      return(
        <div className="quote__container">

      <h3 className="quote">
            <span className="span">Quote:</span> {randomQuote.quote }
          </h3>
     <h6 className="author">
            <span className="span"> Author: </span> {randomQuote.author}
      </h6>
       </div>
          )
      });
    return (
      <div>
        {myArray[Math.floor(this.state.random * myArray.length)]}
        <h3>
            <button onClick={this.getRandom} className="btn btn-primary">Get New Quotes</button>
        </h3>
      </div>
    );
  }
}
export default Quotes;
