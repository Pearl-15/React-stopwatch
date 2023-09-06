import './App.css';
import Stopwatch from './components/Stopwatch';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showStopWatch: true
    }
  }

  render(){
    return(
      <div>
        <label>Show Stop Watch{' '}
        <input
          type="checkbox"
          checked={this.state.showStopWatch}
          onChange={()=>{
            this.setState({showStopWatch: !this.state.showStopWatch})
          }}
          />
      </label>

      <hr />
      {this.state.showStopWatch ? <Stopwatch /> : null}

      </div>
    )
  }
}

export default App;
