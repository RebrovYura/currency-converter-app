import React from 'react'
import Button from './Button';
import img from '../assets/images/hero-main.png';

const Hero = () => {
    return (
        <section id='home' className='flex flex-col lg:flex-row justify-center items-center md:gap-y-[50px] px-[30px] lg:gap-x-[50px] mb-[30px]'>
            <div className='max-w-[410px] order-last lg:order-first min-w-[290px]'>
                <h1 className='font-poppins font-bold text-[28px] sm:text-[40px] my-[20px] text-secondary leading-[40px] sm:leading-[50px]'>
                    Welcome to the
                    currency converter
                </h1>
                <p className='font-poppins text-[16px] sm:text-[20px] font-regular text-secondary leading-[24px] sm:leading-[30px]'>
                    Here you can convert your currency
                    at the current rate. Just click on the
                    button below.
                </p>
                <div className=''>
                    <Button name='Get started'/>
                </div>
            </div>
            <div className='min-w-[250px]'>
                <img src={img} alt="hero" />
            </div>

        </section>
    )
}

export default Hero