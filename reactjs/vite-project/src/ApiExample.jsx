import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiExample = () => {
  const [prdata, setprData] = useState([]);
  useEffect(() => {
    // axios 
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setprData(res.data))
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
  }, []);
  return (
    <>
    <div>
        <table border={'2'}>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Website</td>
                </tr>
            </thead>
            <tbody>
                {
                    prdata.map((i)=>{
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.phone}</td>
                                <td>{i.website}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
};

export default ApiExample;
