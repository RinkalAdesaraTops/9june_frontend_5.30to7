import React from 'react'

// const Secondcomponent = (props) => {
const Secondcomponent = ({myname,myage,sal}) => {
  return (
    <div>
      <h3>Second component called...</h3>
      {/* <h4>Name is -- {props.myname}</h4>
      <h4>Age is -- {props.myage}</h4>
      <h4>Salary is -- {props.sal}</h4> */}
      <h4>Name is -- {myname}</h4>
      <h4>Age is -- {myage}</h4>
      <h4>Salary is -- {sal}</h4>
    </div>
  )
}

export default Secondcomponent
