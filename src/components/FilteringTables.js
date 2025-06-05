import React, { useState } from "react";

const data = [
  { id: 1, product: "Laptop", category: "Electronics" },
  { id: 2, product: "Chair", category: "Furniture" },
  { id: 3, product: "Mobile", category: "Electronics" },
  { id: 4, product: "Water Bottle", category: "Daily Appliance" },
  { id: 5, product: "Bike", category: "Automobile" },
];

function FilteringTables() {
  const [query, setQuery] = useState("");
  const filteredData = data.filter(({ product, category }) => {
    return (
        product.toLowerCase().includes(query.toLowerCase()) ||
          category.toLowerCase().includes(query.toLowerCase())
    )
  });

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="filter"
      />
      <br />
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "10px" }}
      >
        <thead>
          <th>Product</th>
          <th>Category</th>
        </thead>
        {filteredData.length > 0 ? (filteredData.map((item) => {
          return (
            <tr>
              <td>{item.product}</td>
              <td>{item.category}</td>
            </tr>
          );
        })) :
        (data.map((item) => {
          return (
            <tr>
              <td>{item.product}</td>
              <td>{item.category}</td>
            </tr>
          );
        }))
        }
      </table>
    </div>
  );
}

export default FilteringTables;
