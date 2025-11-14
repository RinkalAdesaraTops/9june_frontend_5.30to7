import React from 'react'
import './Customcss.css'
const CssExample = () => {
    let myStyle = {
        color:"purple",
        backgroundColor:"yellow",
        textAlign:"center"
    }
  return (
    <>
    <div>
      <h3 style={{color:'red',backgroundColor:'yellowgreen',fontSize:'30px'}}>Hello</h3>
      <h4 style={myStyle}>Hii</h4>
      <h4>This is example of CSS</h4>

    </div>
    <div className='box'></div>
    </>
  )
}
export default CssExample
