import { useState } from "react"

const Empcomponent = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [alldata,setAlldata] = useState([])
    const handleChange = (e)=>{
        // let nm = e.target.name
        // let val = e.target.value
        let {name,value} = e.target
        setData({
            ...data,
            [name]:value
            // [nm]:val
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        setAlldata([
            ...alldata,
            data
        ])
    }
    const delData = (id)=>{
        let res = alldata.filter((i,index)=> index != id)
        // find & includes - boolean value 
        setAlldata(res)
    }
  return (
    <div>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label>Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange}/><br /><br />
        <label>Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange}/><br /><br />
        <label>Salary:</label>
        <input type="number" name="salary" id="salary" onChange={handleChange}/><br /><br />
        <input type="submit" value="Save Data" />
      </form>
      <br /><br />
      <table border={'2'}>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>   
        </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return (
                        <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td>
                            <button onClick={()=>delData(index)}>Delete</button>
                        </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Empcomponent
