import React from "react";

const data = [
    {id:1, name:"Sadha", role:"Developer"},
    {id:2, name:"Shiva", role:"ML developer"},
    {id:3, name:"Sadha Shiva", role:"Software Developer"}
]

function BasicTable() {
    return (
        <table border="1" cellPadding="8" style={{borderCollapse:"collapse", width:'10px'}}>
            <thead>
                <th>Name</th>
                <th>Role</th>
            </thead>
            {data.map((item) => {
                return (<tr>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                </tr>)
            })}
        </table>
    )
}

export default BasicTable