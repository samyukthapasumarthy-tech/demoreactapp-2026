import React, { Component } from 'react'

export default class Demo6 extends Component {

    constructor(){
        super() // super keyword used to access parent's components
        this.state={id:1,name:"Samyuktha",gender:"female",salary:120000}
    }

    // in class compoenent no need to mention function it will be recognised automatically
    change =()=>{
      this.setState({id:2,name:"Samyu",gender:"F",salary:130000})
    }
  render() {
    return (
      <div>
        <h2>Class component </h2>
        <p>id : {this.state.id}</p>
        <p>name : {this.state.name}</p>
        <p>gender : {this.state.gender}</p>
        <p>salary : {this.state.salary}</p>

        <button onClick={this.change}>Change</button>
      </div>
    )
  }
}
