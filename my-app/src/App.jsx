import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import logo from './images/nvidia-logo.png';
import creaxion from './images/Creaxion.png'; 
import {enPrompts , siPrompts } from './data/promptArr';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Mosaic } from 'react-loading-indicators';
import axios from 'axios';
import footer from './components/footer/footer';
import Footer from './components/footer/footer';

//  import heading from './images/Creaxion.png';
function App() {
  const promptArr = enPrompts;
  const [dynamicPrompts, setDynamicPrompts] = useState(promptArr[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [index,setIndex] = useState(0);
  const [isSin, setIsSin] = useState(false);
  const [Lang, setLang] = useState("En");
  const [isClicked, setIsClicked] = useState(false);
  const [userPrompt, setUserPrompt] = useState('A robot painting a picture with a brush and a palette.');
  const [imageData, setImageData] = useState(null); // Store generated image data
  const [error, setError] = useState(null); // Store error messages
  const [loading, setLoading] = useState(false); // Store loading state


  const imgLink=logo

  const toggleLang=()=>{
    setIsSin(!isSin);    
    setLang(isSin ? "En" : "Si");
  }
  const changePrompt = ()=>{
    if(!isSin){
          setIsAnimating(true);
          setTimeout(()=>{
          const nextIndex = (index + 1) % promptArr.length;
          setDynamicPrompts(promptArr[nextIndex]);
          setIndex(nextIndex);
          setIsAnimating(false);
          },2000);
    }
    else{
          setIsAnimating(true);
          setTimeout(()=>{
          const nextIndex = (index + 1) % siPrompts.length;
          setDynamicPrompts(siPrompts[nextIndex]);
          setIndex(nextIndex);
          setIsAnimating(false);
          },2000);
    }

  }
  useEffect(() => {
    const interval = setInterval(changePrompt, 3000);
    return () => clearInterval(interval); 
  }, [index]);

  //handle image generation
  const handleImageGeneration = async () => {
    setIsClicked(true);
    setLoading(true);
    setError("");
    const endPoint = Lang === "En" ? "generate-image-en" : "generate-image-si";
    try {
      const response = await axios.post("http://localhost:5001/"+endPoint,{
        textPrompts : [{text: userPrompt}]
      });
      const base64Image = response.data.image;
      setImageData(`data:image/png;base64,${base64Image}`);
    }
    catch (err) {
      console.error(err);
      setError("Error generating image");
    }
    finally{
      setLoading(false);
    }

  };



  return (
    <div className='main-container'>
        <Router>
        <Navbar  toggleLang={toggleLang}/> 
        </Router>
      
    <div className="App">
    
      <header className="App-header">
        <h1>CreaXion AI <span className={`${isSin && 'sinhala-heading'}`}>{isSin ? "චිත්‍ර නිර්මාණකය" : "Image Generator"}</span> </h1>
        <p>Powered By <a href="https://www.nvidia.com/en-us/" target="_blank"><img src={logo} alt="nvidia logo"/></a></p>
      </header>
      <div className='input-field'>

      <input 
          type="text" 
          placeholder={isAnimating ? '' : dynamicPrompts} 
          className={`inputfield ${isAnimating ? 'fade-out' : 'fade-in'}`} 
          onFocus={changePrompt}
          onChange={(e)=>{setUserPrompt(e.target.value)}}
          name="prompt-field" 
          autoComplete="off"
          
          />

        <button type="submit" onClick={()=>{handleImageGeneration()}}><span className={`${isSin && 'sin-btn-txt'}`}>{isSin ? "නිර්මාණය කරන්න" : "Generate"}</span></button>
        </div>
         
        {isClicked && ( <div className='genimg-section'>
          {loading && <div className='loading'><Mosaic color={["#009999", "#2AA844", "#99B833", "#CC9900"] } className='LoadingComponent' size="large"></Mosaic></div>}
          {imageData && (
            <>
            <img src={imageData} className='genimg' alt="Generated" />
             <a href={imageData} download='CreaXion-Generated-Image'>
            <button className='download-btn'>
            <span className={`${isSin && 'sin-btn-txt'}`}>
            {isSin ? "ඡායාරූපය බාගත කරගන්න" : "Download the Image"}
            </span>
          </button>
          </a>
          </>
          )}
        </div>
        )}
      </div>
        <Footer/>
    </div>
  );
}

export default App;
