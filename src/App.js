import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
render(){
  return (
    <button onClick={this.incrementCount}>I was clicked {this.state.count}</button>
  );
}
}

export default App;
