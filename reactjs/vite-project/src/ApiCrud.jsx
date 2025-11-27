import React, { useState } from "react";
import axios from "axios";
const ApiCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id, setId] = useState("");
  const [prdata, setPrdata] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      axios
        .put("http://localhost:3000/users/"+id, data)
        .then(() => console.log("Updated"));
    } else {
      axios
        .post("http://localhost:3000/users", data)
        .then(() => console.log("Inserted"));
    }
    setId('')
    setData({
        name:"",
        age:"",
        salary:""
    })
    disp();
  };
  const disp = () => {
    axios.get("http://localhost:3000/users").then((res) => setPrdata(res.data));
  };
  const delData = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => console.log("Deleted"));
    disp();
  };
  const editData = (id) => {
    setId(id);
    axios
      .patch("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data));
  };
  disp();
  return (
    <div>
      <form action="#" method="post" name="frm" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="text"
          name="salary"
          id="salary"
          onChange={handleChange}
          value={data.salary}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
        <br />
        <br />
      </form>
      <table border={"2"}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {prdata.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiCrud;
