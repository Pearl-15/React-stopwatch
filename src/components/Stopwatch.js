import React from 'react';

class Stopwatch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lapse:0,
            running: false
        }
    }

    hanldeRunCilck(){

        const startTime = Date.now() - this.state.lapse;

        if (this.state.running){
            clearInterval(this.timer);
        }else{
            this.timer = setInterval(()=>{
                this.setState({lapse: Date.now() - startTime}, ()=>{
                    //callback function
                    console.log(this.state.lapse)
                });

            })          
        }
        this.setState({running: !this.state.running});       
    }

    handleClearClick(){
        clearInterval(this.timer);
        this.setState({lapse: 0, running: false});
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){

        return (
        <div>
            <h1> This is Stop Watch</h1>
            <label>{this.state.lapse}ms</label>
            <button onClick={()=> this.hanldeRunCilck()}>{ this.state.running ? 'Stop' : 'Start'}</button>
            <button onClick={()=> this.handleClearClick()}>Clear</button>
        </div>
        )
    }
}

export default Stopwatch;