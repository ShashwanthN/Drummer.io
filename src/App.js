import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SetTheme } from './redux/theme';
import { TopBar , FallingLetter} from './components';

import kick from "./images/kick.png";
import snare from "./images/snared.png";
import tom from "./images/tom2.png";
import bass from "./images/bass.png";
import hat from "./images/hat.png";
import drum from "./images/drum.png";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function App() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const drums = useRef([]);

  useEffect(() => {
    // Add event listener for keydown event on the whole document
    document.addEventListener('keydown', handleKeyPress);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleTheme = () => {
    const themeValue = theme === 'light' ? 'dark' : 'light';
    dispatch(SetTheme(themeValue));
  };

  const audioplay = (trigger) => {
    switch (trigger) {
      case "w":
        var tom1 = new Audio(require("./sounds/tom-1.mp3"));
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio(require("./sounds/tom-2.mp3"));
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio(require("./sounds/tom-3.mp3"));
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio(require("./sounds/tom-4.mp3"));
        tom4.play();
        break;
      case "j":
        var snare = new Audio(require("./sounds/snare.mp3"));
        snare.play();
        break;
      case "k":
        var kickbass = new Audio(require("./sounds/kick-bass.mp3"));
        kickbass.play();
        break;
      case "l":
        var crash = new Audio(require("./sounds/crash.mp3"));
        crash.play();
        break;
      default:
        console.log(trigger);
        break;
    }
  };
  

  const handleClick = (trigger) => {
    audioplay(trigger);
  };

  const handleKeyPress = (event) => {
    const trigger = event.key.toLowerCase();
    audioplay(trigger);
  };

  return (
    <div data-theme={theme} className='w-full fonts min-h-screen overflow-hidden'>
      
      <div className="w-full h-screen justify-center items-center bg-bg">
        <TopBar />
        
        <div className='home w-full h-screen overflow-hidden'>
        <FallingLetter />
          <div className='w-full flex flex-row justify-center h-full'>
            <div className="w-full h-full text-bg2 flex flex-col justify-center items-center lg:items-start lg:w-1/4">
              <button className="q items-center hover:shadow-lg drum mb-4" onClick={() => handleClick('w')}>
                <img src={tom} alt="Tom Drum" />
              </button>
              <button className="w drum mb-4" onClick={() => handleClick('a')}>
                <img src={kick} alt="Kick Drum" />
              </button>
              <button className="e drum mb-4" onClick={() => handleClick('s')}>
                <img src={snare} alt="Snare Drum" />
              </button>
            </div>
            <div className="drumalign lg:w-2/4 flex justify-center items-center">
              <img src={drum} alt="Drum Set" className="hidden md:block" />
            </div>
            <div className="w-full h-full text-bg2 flex flex-col justify-center items-center lg:items-end lg:w-1/4">
              <button className="r items-center hover:shadow-lg drum mb-4" onClick={() => handleClick('j')}>
                <img src={hat} alt="Hat Drum" />
              </button>
              <button className="t drum mb-4" onClick={() => handleClick('k')}>
                <img src={bass} alt="Bass Drum" />
              </button>
              <button className="y drum mb-4" onClick={() => handleClick('l')}>
                <img src={snare} alt="Snare Drum" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-text text-bg h-screen overflow-y-auto">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-md text-center md:text-md font-bold mb-8">Get Started</div>
          <p className="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit felis vitae facilisis.</p>
        </div>
      </div>
      <footer className="bg-bg text-center py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-bg2 hover:text-blue-700">
              Documentation
            </a>
            <a href="#" className="text-ascent hover:text-primary">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-ascent hover:text-primary">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-ascent hover:text-text">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
