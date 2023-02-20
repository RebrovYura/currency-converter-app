import React from 'react'

const CurrencySelect = (props) => {
  return (
    <div>
        <select name="" id="" className='font-poppins font-bold text-[16px] md:text-[20px] w-full bg-input outline-none rounded-[5px] px-[15px] py-[8px]'>
            <option value="">{props.option}</option>
        </select>
    </div>
  )
}

export default CurrencySelect