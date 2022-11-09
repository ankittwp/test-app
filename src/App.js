import './App.css';
import React from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import TextConverter from './Components/TextConverter'

function App() {
  return (
   <React.Fragment>
    <Header logo_text="Ankit Tyagi" />
    {/* <Body /> */}
    <TextConverter />
   </React.Fragment>
  );
}

export default App;
