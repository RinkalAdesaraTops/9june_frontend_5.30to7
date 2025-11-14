import React, { useState } from 'react'

const StateExample = () => {
    //Hooks - 
    const [name,setName] = useState("abcd")
    const [count,setCount] = useState(10)
    let addName = ()=>{
        setName("TEST")
    }
  return (
    <div>
      <h4>Name is -- {name}</h4>
      <button onClick={addName}>Change Name</button>
      <h4>Count is -- {count}</h4>
      <button onClick={()=>setCount(count+1)}>Add Counter</button>
    </div>
  )
}
export default StateExample
