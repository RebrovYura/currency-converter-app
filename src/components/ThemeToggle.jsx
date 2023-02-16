import { useState, Fragment } from 'react'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg';

const ThemeToggle = () => {
    const [toggleButton, setToggleButton] = useState(true)
    localStorage.setItem('lightTheme', toggleButton)
    return (
        <Fragment>
            <button
                className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex justify-center items-center ml-[40px] rounded-[10px] bg-primary shadow-lg`}
                onClick={() => setToggleButton((prev) => {
                    return prev = !prev
                })}>
                <img src={toggleButton ? moon : sun} alt="moon" className='w-[16px] h-[16px] md:w-[30px] md:h-[30px]' />
            </button>
        </Fragment>
    )
}

export default ThemeToggle