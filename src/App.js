import React, { useState } from 'react';
import { SetTheme } from './redux/theme';
import { useDispatch, useSelector } from "react-redux";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import drum from "./images/drum.png";

function App() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    const themeValue = theme === 'light' ? 'dark' : 'light';
    dispatch(SetTheme(themeValue));
  };

  return (
    <div data-theme={theme} className='w-full min-h-[100vh] overflow-y-scroll'>
      <div className="bg-bg w-full h-screen  justify-center items-center">
        <div className='home w-full px-4 2xl:px-0 bg-bgColor h-full'>
          <div className='w-full flex flex-row lg:flex-row justify-center pb-10 h-full'>
            {/* Left */}
            <div className="text-bg2 flex flex-col justify-center items-center lg:items-start lg:w-1/4">
              <button className="q p-3 items-center hover:shadow-lg drum">1</button>
              <button className="w drum">2</button>
              <button className="e drum">3</button>
            </div>

            {/* Center */}
            <div className="pt-10 drumalign lg:w-2/4 flex justify-center items-center">
              <img src={drum} alt="Drum roland click to drum online drumming website easy drum" />
            </div>

            {/* Right */}
            <div className="text-bg2 flex flex-col justify-center items-center lg:items-end lg:w-1/4">
              <button className="r items-center hover:shadow-lg drum">4</button>
              <button className="t drum">5</button>
              <button className="y drum">6</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
