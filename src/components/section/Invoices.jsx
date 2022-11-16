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

function Invoices({openModal}) {
  const [items] = React.useState(data);

  console.log();
  const elements = items.map((item) => <Rows key={item.id} item={item} />);
  return (
    <div>
      <div className="main-top">
        <h1>Invoices</h1>
        <button onClick={openModal} >
          <BsFillPlusCircleFill className="main-icon" /> Add
        </button>
      </div>
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
    </div>
  );
}

export default Invoices;
