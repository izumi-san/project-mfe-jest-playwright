import React from "react";
import './App.css' 
import IconButton from "./components/IconButton";
import Menu from "./components/Menu";
import BmcSection from "./components/BmcSection";

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
      <h1 className="content-title">Home</h1>
      <div className="main-section">
        <div className="main-text">
          <p>
            IMC, ou Índice de Massa Corporal, é uma medida internacional usada para saber se uma pessoa está no peso ideal. 
            Ajudando a identificar problemas de obesidade ou desnutrição. O cálculo é feito usando o <b>peso em KG</b> dividido
            pela <b>altura em metros</b> ao quadrado.

          </p>
        </div>
        <BmcSection/>
      </div>
      <img className="App-img" src={"https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
    </div>
    <IconButton goToLink={'http://localhost:4000'}/>
  </div>
 );
};

export default App;
