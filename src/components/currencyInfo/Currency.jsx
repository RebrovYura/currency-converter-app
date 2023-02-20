import React from 'react'
import CurrencySelect from './CurrencySelect';
import CurrencyInput from './CurrencyInput';

const Currency = (props) => {
    return (
        <div className='md:w-[350px] w-full'>
            <div className='text-secondary font-semibold text-[20px]'>
                {props.heading}
            </div>
            <CurrencySelect />
            <CurrencyInput/>
        </div>
    )
}

export default Currency