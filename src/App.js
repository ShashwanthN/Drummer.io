import React from 'react';
import { SetTheme } from './redux/theme';
import { useDispatch, useSelector } from "react-redux";
import { TopBar } from './components';
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
  const handleTheme = () => {
    const themeValue = theme === 'light' ? 'dark' : 'light';
    dispatch(SetTheme(themeValue));
  };

  return (
    <div data-theme={theme} className='w-full min-h-screen overflow-hidden'>
      <div className="bg-bg w-full h-screen justify-center items-center">
        <TopBar />

        {/* Drum Section */}
        <div className='home w-full bg-bgColor h-screen overflow-hidden'>
          <div className='w-full flex flex-row justify-center h-full'>
            {/* Left */}
            <div className="w-full h-full text-bg2 flex flex-col justify-center items-center lg:items-start lg:w-1/4">
              <button className="q items-center hover:shadow-lg drum mb-4">
                <img src={tom} alt="Tom Drum" />
              </button>
              <button className="w drum mb-4">
                <img src={kick} alt="Kick Drum" />
              </button>
              <button className="e drum mb-4">
                <img src={snare} alt="Snare Drum" />
              </button>
            </div>

            {/* Center */}
            <div className="drumalign lg:w-2/4 flex justify-center items-center">
              <img src={drum} alt="Drum Set" className="hidden md:block" />
            </div>

            {/* Right */}
            <div className="text-bg2 flex flex-col justify-center items-center lg:items-end lg:w-1/4">
              <button className="r items-center hover:shadow-lg drum mb-4">
                <img src={hat} alt="Hat Drum" />
              </button>
              <button className="t drum mb-4">
                <img src={bass} alt="Bass Drum" />
              </button>
              <button className="y drum mb-4">
                <img src={snare} alt="Snare Drum" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-bgColor h-screen overflow-y-auto">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h2 className="text-3xl text-center font-bold mb-8">About Me</h2>
          <p className="text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit felis vitae facilisis.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bgColor text-center py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center space-x-6">
            {/* Documentation Link */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Documentation
            </a>
            {/* Social Links */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            {/* GitHub Link */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
