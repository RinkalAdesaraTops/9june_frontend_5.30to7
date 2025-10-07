let userData = []
const savedata = ()=>{
    let nm = document.getElementById('name').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let obj = {
        id:1,
        name:nm,
        age:age,
        salary:sal
    }
    userData.push(obj)
    console.log(userData);
    localStorage.setItem("userinfo",JSON.stringify(userData))
    disp()
}
const disp = ()=>{
    let data = JSON.parse(localStorage.getItem("userinfo"))
    let tr=''
    data.map((i)=>{
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.salary}</td>
                <td>Delete</td>
            </tr>`
    })
    document.getElementById('alldata').innerHTML = tr
}
disp()