import React from "react";
import ContactForm from "./components/ContactForm";
import './App.css' 
import IconButton from "./components/IconButton";
import Menu from "./components/Menu";

export const App = () => {
 return (
  <div className="App">
    <div className="App-header">
      <h1>
        Avanade Fitness
      </h1>
    </div>
    {/*<Menu />*/}
    <div className="App-content">
      <h1 className="content-title">Contato</h1>
      <div className="contact-section">
        <ContactForm/>
        <img width={"300px"} height={"250px"} src={"https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
      </div>
    </div>
    <IconButton goToLink={'http://localhost:3000'}/>
  </div>
 );
};

export default App;
