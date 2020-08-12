import React { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Images from './Photos/Images'
import Text from './Text/Text'



function App() {
  const [] = useState()
  
  useEffect(() => {

  });
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
    <Header />
    <Footer />
    <Images />
    <Text />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
