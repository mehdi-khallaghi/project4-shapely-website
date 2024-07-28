import './App.css';
import React from 'react';
import Header from './Header/Header';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3-parallax';
import Section4 from './Sections/Section4-limit';
import Section5 from './Sections/Section5-img';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/> 
      <Section3/>
      <Section4/>
      <Section5/>
   </div>
  );
}

export default App;
