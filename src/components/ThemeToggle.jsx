import { useState, useEffect } from 'react'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg';

const ThemeToggle = () => {
    const [toggleButton, setToggleButton] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved || 'light'
    })

    let html = document.querySelector('#html')

    useEffect(() => {
        localStorage.setItem('theme', toggleButton)
        if (localStorage.getItem('theme') == 'light') {
            html.classList.remove('dark')
            html.classList.add('light')
        } else {
            html.classList.remove('light')
            html.classList.add('dark')
        }
    }, [toggleButton])

    return (
        <>
            <button
                className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex justify-center items-center md:ml-[40px] ml-[20px] rounded-[10px] dark:bg-darkbg bg-primary shadow-buttonShadow`}
                onClick={() => setToggleButton((currentTheme) => {
                    return currentTheme == 'light' ? 'dark' : 'light'
                })}>
                <img src={toggleButton == 'light' ? moon : sun} alt="theme" className='w-[16px] h-[16px] md:w-[30px] md:h-[30px]' />
            </button>
        </>
    )
}

export default ThemeToggle