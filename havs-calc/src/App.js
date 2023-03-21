import React from 'react';
import './App.css';
import {InputComponent} from "./components/input/InputComponent";
import {ResultComponent} from "./components/results/ResultComponent";
import {DisplayItems} from "./components/display-items/DisplayItems";

function App() {
    return (
        <div className="App">
            <header className="App-header m-5">
                <h1>HAVS Calculator</h1>
                <p>Are you wondering how to calculate vibration exposure, for one tool or multiple tools, and stay
                    within the legal
                    limits? Enter your tools and times below to find out. The HAVS calculator will tell you if you are
                    under or over
                    the exposure action value, and how close you are to the limit.</p>

            </header>
            <ResultComponent/>

            <DisplayItems/>
        </div>
    );
}

export default App;
