import React from 'react';
import QuoteCard from './components/simpson';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: []
    }
    this.getSimpson = this.getSimpson.bind(this);
  }

  componentDidMount() {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=5') 
      .then(resp => resp.json())
      .then(data => {
        console.log({ quote: data[0] });
        this.setState({ quote: data[0] });
      });
  }

  getSimpson = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=5')
      .then(resp => resp.json())
      .then(data => {
        console.log({ quote: data[0] });
        this.setState({ quote: data[0] });
      });
  }

  render() {
    return (
      <div>
        <QuoteCard quotes={this.state.quote} />
        <button type="button" onClick={this.getSimpson}>Quote</button>
      </div>
    );
  }
}

export default App;
