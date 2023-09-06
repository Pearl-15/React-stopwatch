import './App.css';
import Stopwatch from './components/Stopwatch';
import React from 'react';
import Form from './components/Form';



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

      <hr />

      <Form />

      </div>
    )
  }
}

export default App;
