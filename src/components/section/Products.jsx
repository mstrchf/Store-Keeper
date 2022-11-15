import data from "../../data";
import { BsFillPlusCircleFill } from "react-icons/bs";
import React from "react";

function Rows({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.item}</td>
      <td>{item.category}</td>
      <td>{item.quantity}</td>
    </tr>
  );
}

function Products() {
  const [items, setItems] = React.useState(data);

  function addItems() {
    
    setItems(prevItems => {
  console.log(prevItems);

        return [...prevItems, { id: prevItems.length + 1, item: "Milk", category: "Diary", quantity: 90 },]
    })
  }

  const elements = items.map((item) => <Rows key={item.id} item={item} />);
  return ( 
    <div>
      <div className="main-top">
        <h1>Products</h1>
        <button onClick={addItems} >
          <BsFillPlusCircleFill className="main-icon" /> Add
        </button>
      </div>

      {elements.length < 1 ? <h2>No Items</h2> : 
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Category</td>
            <td>Qty in Stock</td>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
      }
    </div>
  );
}

export default Products;
