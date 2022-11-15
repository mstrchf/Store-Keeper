import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Side from "./components/Side";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {
  AiFillDashboard,
  AiFillSetting,
  AiFillShop,
  AiFillAccountBook,
} from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";

let data = [
  { id: 1, name: "Dashboard", icon: AiFillDashboard, active: true },
  { id: 2, name: "Products", icon: AiFillShop, active: false },
  { id: 3, name: "Categories", icon: BsFillLayersFill, active: false },
  { id: 4, name: "Invoices", icon: AiFillAccountBook, active: false },
  { id: 5, name: "Settings", icon: AiFillSetting, active: false },
];

function App() {
  const [sections, setSections] = useState(data);

  function setActive(id) {
    console.log("section id: " + id);

    setSections((prevSections) => {
      const newSections = [];
      prevSections.forEach((section) => {
        if (id === section.id) {
          newSections.push({ ...section, active: !section.active });
        } else {
          newSections.push({ ...section, active: false });
        }
      });

      return newSections;
    });
  }

  return (
    <div className="App">
      <Header />
      <Side sections={sections} setActive={setActive} />
      <Main sections={sections}/>
      <Footer />
    </div>
  );
}

export default App;
