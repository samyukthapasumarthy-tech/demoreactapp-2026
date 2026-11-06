import React, { Component } from 'react'

export default class Demo5 extends Component {
  render() {
    return (
      <div>
        <h2>Props Demo in Class Component</h2>
          <p>a : {this.props.a}</p>
        <p>b : {this.props.b}</p>
        <p>text : {this.props.text}</p>
        <p>emp id : {this.props.emp.id}</p>
        <p>emp name : {this.props.emp.name}</p>
      </div>
    )
  }
}
