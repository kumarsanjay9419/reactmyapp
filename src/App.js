//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import Alert from './componenets/Alert';
import About from './componenets/About';
import React from "react";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";


//let name="Sanjay Kumar Singh";
function App() {
  const[mode,seMode]=useState('light'); //whether dark mode is enabled or not
  const[alert,seAlert]=useState(null); //for alert
  const showAlert=(message,type)=>{
    seAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      seAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      seMode('dark');
      showAlert("  Dark mode has been enabled!!","success");
      document.body.style.backgroundColor='#042743';
      document.title='My-App Dark Mode';

      //this is for showing message dynamically.....
      // setInterval(()=>{
      //   document.title='My-App is Awesome Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install My-App now';
      // },1500);

    }else{
      seMode('light');
      showAlert(" Light mode has been enabled!!","success");
      document.body.style.backgroundColor='white';
      document.title='My-App Light Mode';
    }
  }
  return (
    <>
 {/* <Navbar title="UtilsText" aboutText="About Us"/> */}
  {/* or we can write this   */}
  
  <Router>
 <Navbar title="UtilsText" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Routes>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyse below" mode={mode}/>
          </Route> */}

            
          <Route exact path="/about" element={<About />} />
          
          < Route exact path="/"
            element= {<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>} /> 
          
  </Routes>
        </div>
        </Router>
   
    </>
  );
}

export default App;
