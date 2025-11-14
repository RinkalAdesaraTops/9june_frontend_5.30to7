import React, { Component } from "react";
class LifecycleClass extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      name: props.myname,
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({
        name: "ABcd",
      });
    }, 3000);
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps called");
    console.log("State & Props are");
    console.log(props);
    console.log(state);
    return null
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called");
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate called");
    console.log('Previous state are:');
    console.log(prevState);
    console.log(prevProps);
    return null
  }
  componentDidUpdate(){
    console.log('FInally component updated...'); 
  }
  render() {
    console.log("render called");
    return (
      <div>
        <h3>Lifecycle Example</h3>
        <h4>Name is -- {this.state.name}</h4>
        <h4>Count is -- {this.state.count}</h4>
      </div>
    );
  }
}
export default LifecycleClass;
