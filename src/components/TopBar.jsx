import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLightMode, MdDarkMode, MdMenu, MdMenuBook, MdMenuOpen } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { SetTheme } from '../redux/theme';
import { animateScroll as scroll } from 'react-scroll';

const TopBar = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
        scroll.scrollTo(0, {
            duration: 500,
            smooth: true,
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`topbar fixed top-0 left-0 z-10 w-full  flex divide-secondary divide-y divide-y-reverse bg-ascent transition-all duration-1000 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className='relative bg-ascent pl-2 transition-all duration-1000 pr-2 flex items-center h-full'>
                <span className='text-3xl flex items-center md:text-5xl font-bold text-bg'>Drummer.</span>
                <span className='text-text md:text-5xl text-3xl flex items-center font-bold'>IO</span>
            </div>
            <div className='w-full font-Roboto flex items-center text-bg2 justify-between py-2 md:py-1 px-4 bg-bg'>
                <div></div>

                <div className='flex gap-4 items-center justify-center text-text font-regular hover:text-shadow-3xl text-md md:text-xl relative'>
                    
                    <button className='hidden md:block cursor-pointer pr-4 hover:decoration-primary hover:text-gray-500 pl hover:underline  border-r  border-secondary transition-all duration-300' onClick={scrollToAboutMe}>Get Started</button>
                    <button className='hidden md:block cursor-pointer pr-4 hover:decoration-primary hover:text-gray-500  border-r border-secondary hover:underline transition-all duration-300' onClick={scrollToDocumentation}>Documentation</button>
                    <button className='text-ascent   border-secondary md:pr-2 ' onClick={() => handleTheme()}>
                        {theme === 'light' ?<div className='flex items-center '> <MdDarkMode className='md:mr-2' size={25} /> <span className='hidden md:block font-bold'>Dark</span></div> : <div className='flex items-center '> <MdLightMode className='md:mr-2' size={25} /> <span className='hidden md:block'>Light</span></div>}
                    </button>
                    <div className="relative md:hidden" ref={dropdownRef}>
                        <button className='cursor-pointer pr-2 flex items-center hover:decoration-primary hover:text-gray-500 pl-4 border-l border-secondary hover:underline transition-all duration-300' onClick={toggleDropdown}><MdMenu size={22}/></button>
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 z-20 bg-bg border border-secondary mt-1 w-40 rounded-lg shadow-md">
                                <button className='w-full text-left px-4 py-2 hover:bg-ascent hover:text-bg2 transition-all duration-300' onClick={scrollToDocumentation}>Documentation</button>
                                <button className='w-full text-left px-4 py-2 hover:bg-ascent hover:text-bg2 transition-all duration-300' onClick={scrollToAboutMe}>Get Started</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
