import "./App.css";
import React, { useState} from "react";
import Navbar from "./components/Navbar";
import News  from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = "b95a1021963f4e49b901b724f73c9a62";
  const page = 9;
  const [progress , setProgress] = useState(0);

  
    return (
      <div className="container">
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Navbar />
          
            <Routes>
              <Route exact path="/" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="general" pageSize={page} country="in" category="general" />}></Route>
              <Route exact path="/business" element={<News apiKey = {apiKey} setProgress = {setProgress} key="business" pageSize={page} country="in" category="business" />}></Route>
              <Route exact path="/entertainment" element={<News apiKey = {apiKey} setProgress = {setProgress} key="entertainment" pageSize={page} country="in" category="entertainment"/>}></Route>
              <Route exact path="/general" element={<News apiKey = {apiKey} setProgress = {setProgress} key="general" pageSize={page} country="in" category="general" />}></Route>
              <Route exact path="/health" element={<News apiKey = {apiKey} setProgress = {setProgress} key="health" pageSize={page} country="in" category="health" />}></Route>
              <Route exact path="/science" element={<News apiKey = {apiKey} setProgress = {setProgress} key="science" pageSize={page} country="in" category="science" />}></Route>
              <Route exact path="/sports" element={<News apiKey = {apiKey} setProgress = {setProgress} key="sports" pageSize={page} country="in" category="sports" />}></Route>
              <Route exact path="/technology" element={<News apiKey = {apiKey} setProgress = {setProgress} key="technology" pageSize={page} country="in" category="technology" />}></Route>
            </Routes>
        </Router>
      </div>
    );
  
}



export default App
