import React from 'react';

import './App.css';
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Partners from "./sections/Partners/Partners";
import SliderSection from "./sections/Slider/SliderSection";

function App() {
  return (
    <div className="App">
		<Header/>
		<Hero/>
		<Partners/>
		<SliderSection/>
    </div>
  );
}

export default App;
