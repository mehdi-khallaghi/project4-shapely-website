import './App.css';
import React from 'react';
import Header from './Header/Header';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3-parallax';
import Section4 from './Sections/Section4-limit';
import Section5 from './Sections/Section5-img';
import Section6 from './Sections/Section6-clients';
import Section7 from './Sections/Section7-download';
import Footer from './Footer/Footer';



function App() {

  const dataSection = [
    { id: 1, title: 'SEO Friendly', desp : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.', image:'macbook.png'},
    { id: 1, title: 'SEO Friendly', desp : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.', image:'portfolio.png'},
  ]


  return (
    <div className="App">
      <Header />
      <Section1 {...dataSection[0]}/>
      <Section2  {...dataSection[1]}/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;
