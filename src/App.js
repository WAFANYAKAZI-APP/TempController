import React from "react";
import './App.css';
import {useState} from "react";

function App() {
    const [temp ,setTemp] = useState(10);
    const [tempColour, setTempColor] = useState("cold")

    const inTemperature = () =>{
        if(temp === 30) return;

        if (temp >= 15){
            setTempColor("hot")
        }
        setTemp(temp + 1)
    }
    const deTemperature = () =>{
        if(temp === 0) return;
        if (temp <= 15){
            setTempColor("cold")
        }
        setTemp(temp - 1)
    }
    return (

        <div className="app-container">
            <div className="temp-display-container">
                <div className={` temp-display ${tempColour}`}>
                    {temp}°
                </div>
            </div>
            <div className="button-container">
                <button onClick={()=> inTemperature()}>+</button>
                <button onClick={()=> deTemperature()}>-</button>
            </div>
        </div>
    );
}

export default App;
