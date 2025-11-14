import React, { Component } from 'react'
class ClassExample extends Component {
  constructor(){
      super()
      this.state = {
        name:"test",
        age:25,
        salary:25000
      }
      this.handleClick = ()=>{
        this.setState({
          name:"Abcd"
        })
      }
      this.handleAge = ()=>{
        this.setState({
          age:35
        })
      }
      this.handleSal = ()=>{
        this.setState({
          salary:50000
        })
      }
  }
  render() {
    return (
      <div>
        <h3>Name is -- {this.state.name}</h3>  
        <h3>Age is -- {this.state.age}</h3>  
        <h3>Salary is -- {this.state.salary}</h3>  
        <button onClick={this.handleClick}>Set New Name</button>
        <button onClick={this.handleAge}>Set New Age</button>
        <button onClick={this.handleSal}>Set New Salary</button>
      </div>
    )
  }
}
export default ClassExample