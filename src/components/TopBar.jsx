import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { SetTheme } from '../redux/theme';
import { animateScroll as scroll } from 'react-scroll';

const TopBar = () => {

    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
   
    const handleTheme = () => {
        const themeValue = theme === 'light' ? 'dark' : 'light';
        dispatch(SetTheme(themeValue));
    };

    const scrollToAboutMe = () => {
        scroll.scrollTo(window.innerHeight, {
            duration: 500,
            smooth: true,
        });
    };

    const scrollToDocumentation = () => {
        // Replace 'documentation' with the ID of your documentation sectio
        scroll.scrollTo(0, {
            duration: 500,
            smooth: true,
        });
    };

    return (
        <div className='topbar w-full font-family:Segoe UI flex items-center text-primary justify-between py-2 md:py-1 px-4 bg-ascent-1'>
            
            <Link to='/' className='flex gap-2 items-center'>
                <span className='text-xl text-bg2 md:text-5xl font-bold'>Drummer.<span className='text-bg md:text-5xl text-xl font-bold'>IO</span></span>
            </Link>

            <div className='flex gap-4 items-center text-primary hover:text-shadow-lg text-md md:text-xl relative'>
            <button className='cursor-pointer' onClick={scrollToDocumentation}>Documentation</button>
            <button className='cursor-pointer' onClick={scrollToAboutMe}>About Me</button>
                <button onClick={() => handleTheme()}>
                    {theme === 'light' ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
                </button>

                <div className='lg:flex '>
                    <MdNotifications 
                     size={25}
                     />
                </div>

                {/* About Me Button */}
               

                {/* Documentation Button */}
               
                    
            </div>
        </div>
    );
};

export default TopBar;
