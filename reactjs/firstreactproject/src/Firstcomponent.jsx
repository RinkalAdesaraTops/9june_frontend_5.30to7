import React, { Fragment } from "react"
import styled from "styled-components"
import mystyle from './mystyle.module.css'
const Firstcomponent = ()=>{
    let a=20
    const b=25
    let name="Test"
    let H4 = styled.h4 `
            color:red;
            text-align:center;
            background-color:yellowgreen
    `
    return(
        // <React.Fragment>
        // <Fragment>
        <>
        <div>
            <h3>Component created by me...</h3>
            <H4>Addition is {a+b}</H4>
            <h4>Name is {name}</h4>
            <button>Add</button>
            <button>Cancel</button>

        </div>
        <div className={mystyle.box}></div>
        </>
        // </Fragment>
        // {/* </React.Fragment> */}
    )
}
export default Firstcomponent