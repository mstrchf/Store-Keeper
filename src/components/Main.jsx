import React from "react";
import Products from "./section/Products";
import Invoices from "./section/Invoices";
import Dashboard from './section/Dashboard'
import Categories from './section/Categories'
import Settings from './section/Settings'


function Main({ sections, openModal }) {
let items = [<Dashboard /> ,<Products openModal={openModal} />, <Categories openModal={openModal} />, <Invoices openModal={openModal}  />, <Settings />];

  return (
    <div className="main">
      {sections.map(section => {
        if (section.active){
          return items[section.id - 1]
        }
      })}
    </div>
    // <Invoices />
  );
}

export default Main;
