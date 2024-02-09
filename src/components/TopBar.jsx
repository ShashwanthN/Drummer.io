import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { SetTheme } from '../redux/theme';
import { animateScroll as scroll } from 'react-scroll';

const TopBar = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <div className={`topbar fonts fixed top-0 left-0 z-10 w-full flex divide-secondary divide-y divide-y-reverse bg-bg  ${isScrolled ? 'shadow-md transition-all duration-1000' : ''}`}>
            <div className='relative bg-secondary cursor-pointer pr-2 mb-2 flex items-center h-full'>
                <span className='text-xl md:text-5xl font-bold text-text'>Drummer.</span>
                <span className='text-ascent md:text-5xl text-xl font-bold'>IO</span>
            </div>
            <div className='w-full font-Roboto flex items-center text-bg2 justify-between py-2 md:py-1 px-4 bg-bg'>
                <div></div>

                <div className='flex gap-4 items-center text-bg2 font-medium hover:text-shadow-lg  text-md md:text-xl relative'>
                    <button className='cursor-pointer hover:underline pr-4' onClick={scrollToDocumentation}>Documentation</button>
                    <button className='cursor-pointer hover:underline pr-4' onClick={scrollToAboutMe}>Get Started</button>
                    <button className='text-ascent-2 pr-4' onClick={() => handleTheme()}>
                        {theme === 'light' ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
                    </button>

                    <div className='lg:flex '>
                        <MdNotifications size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
