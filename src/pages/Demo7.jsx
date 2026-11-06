import React, { Component } from 'react'

export default class Demo7 extends Component 
{
 constructor()
 {

  super()

  this.state={count:0}
 }

 increament=() => 
    {
       this.setState({count:this.state.count+1})
    }

     decreament=() => 
    {
       this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h2>Demo App counter</h2>
         <p>Count={this.state.count}</p>

        <button onClick={this.increament}>Increament</button>
        <button onClick={this.decreament}>Decreament</button>



      </div>
    )
  }
}
