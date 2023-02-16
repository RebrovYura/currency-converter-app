import { useState } from 'react'
import { navLinks } from '../constants'
import ThemeToggle from './ThemeToggle'
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';

const Navbar = (props) => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  return (
    <nav className='flex justify-between items-center navbar py-[25px] px-[30px]'>
      <span className='font-poppins font-extrabold md:text-[32px] text-[24px] text-secondary'> Convert
        <span className='text-accent'>Simple</span>
      </span>
      <ul className='list-none hidden md:flex justify-end items-center'>
        {navLinks.map((link, index) =>
          <li key={link.id} className={`font-poppins font-bold md:text-[20px] text-[16px] cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[40px]'} text-secondary`}>
            <a href={`${link.id}`} className='hover:text-accent transition'>{link.title}</a>
          </li>
        )}
        <li className=''>
          <ThemeToggle/>
        </li>
      </ul>
      <div className='md:hidden flex justify-end item-center ml-[20px]'>
        <div className='mr-[20px]'>
        <ThemeToggle/>
        </div>
        <img src={burgerMenu ? close : menu} alt='menu'
          onClick={() => setBurgerMenu((prev) => !prev)} />
        <div className={`${burgerMenu ? 'flex' : 'hidden'} absolute py-[25px] px-[30px] right-[30px] top-[70px] rounded-[10px] bg-primary shadow-lg`}>
          <ul className='list-none flex justify-center flex-col items-center flex-1'>
            {navLinks.map((link, index) =>
              <li key={link.id} className={`font-poppins font-bold text-[16px] cursor-pointer  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-[25px]'} text-secondary`}>
                <a href={`${link.id}`} className='hover:text-accent transition'>{link.title}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar