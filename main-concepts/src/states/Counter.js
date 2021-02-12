import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = { 
            count: 0
         }
    }

    handleIncrement = () => {
        this.setState((prevState,props)=>({count: prevState.count+1}),()=>{
            console.log(`Callback value: ${this.state.count}`);
        });
        console.log(this.state.count);
    }

    multipleIncrement= ()=>{
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
        this.handleIncrement();
    }


    render() { 
        return ( 
            <div>
                <h1>COUNTER: {this.state.count}</h1>
                <div>
                    <button onClick={this.handleIncrement}>INCREMENT</button>
                </div>
            </div>
         );
    }
}
 
export default Counter;