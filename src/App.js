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

  getErrorMessage = (value)=>{
        
    if(value.length < 3){
        return `value must be at least 3 characters, but is only ${value}`
    }
    if(!value.includes('s')){
        return `value does not include "s" but it should!`
    }
    return null
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

      <Form getErrorMessage={this.getErrorMessage}/>

      </div>
    )
  }
}

export default App;
