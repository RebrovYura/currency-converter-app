import { useState } from 'react'

const CurrencyInput = (props) => {
  // TODO 9 символов в строке 

  const [value, setValue] = useState('')

  return (
    <div className=''>
      <input
        type="number"
        name={props.name}
        id={props.id}
        value={value}
        readOnly={props.readOnly}
        className='font-poppins font-semibold text-secondary w-full text-[20px] lg:text-[24px] my-[10px] lg:my-[15px] h-[100px] md:h-[150px] bg-input outline-none px-[20px] py-[10px] lg:p-[25px] rounded-[5px]'
        onChange={(e) => setValue(number => number = e.target.value)}
      />
    </div>
  )
}

export default CurrencyInput