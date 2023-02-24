import { useState } from 'react'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg';

const ThemeToggle = () => {
    const [toggleButton, setToggleButton] = useState(true)
    localStorage.setItem('lightTheme', toggleButton)
    return (
        <>
            <button
                className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex justify-center items-center md:ml-[40px] ml-[20px] rounded-[10px] bg-primary shadow-buttonShadow`}
                onClick={() => setToggleButton((prev) => {
                    return prev = !prev
                })}>
                <img src={toggleButton ? moon : sun} alt="moon" className='w-[16px] h-[16px] md:w-[30px] md:h-[30px]' />
            </button>
        </>
    )
}

export default ThemeToggle