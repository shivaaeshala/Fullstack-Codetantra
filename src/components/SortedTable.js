import React, {useState} from "react";

const data = [
    {id:1, name:"Sadha", role:"Developer"},
    {id:2, name:"Shiva", role:"ML developer"},
    {id:3, name:"Sadha Shiva", role:"Software Developer"}
]

function SortedTable() {
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const sortedData = [...data].sort((a, b) => {
        if (!sortKey) return 0;
        const valA = a[sortKey].toLowerCase();
        const valB = b[sortKey].toLowerCase();
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortOrder("asc");
        }
    };

    return (
        <table border="1" cellPadding="8" style={{borderCollapse:"collapse", width:'10px'}}>
            <thead>
                <th onClick={() => {handleSort("name")}} style={{cursor:"pointer"}} >Name</th>
                <th onClick={() => {handleSort("role")}} style={{cursor:"pointer"}} >Role</th>
            </thead>
            {sortedData.map((item) => {
                return (<tr>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                </tr>)
            })}
        </table>
    )
}

export default SortedTable