import React from 'react'
import CurrencySelect from './CurrencySelect';
import CurrencyInput from './CurrencyInput';

const Currency = (props) => {
    return (
        <div className='md:w-[350px] w-full'>
            <div className='dark:text-primary text-secondary font-semibold text-[20px] mb-[5px]'>
                {props.heading}
            </div>
            {props.children}
        </div>
    )
}

export default Currency