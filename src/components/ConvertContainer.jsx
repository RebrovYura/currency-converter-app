import { useState } from 'react'

import Clock from './Clock'
import Currency from './currencyInfo/Currency'
import Button from './Button'
import CurrencySelect from './currencyInfo/CurrencySelect'
import CurrencyInput from './currencyInfo/CurrencyInput'
import ExchangeRates from './currencyInfo/ExchangeRates'
import currency from '../data/currency.json'
import arrows from '../assets/icons/arrows.svg'

const ConvertContainer = () => {

    const [firstInputValue, setFirstInputValue] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')
    const [selectFitstValue, setSelectFirstValue] = useState(currency[0].code)
    const [selectSecondValue, setSelectSecondValue] = useState(currency[0].code)

    const firstInputValueChange = (e) => {
        setFirstInputValue(value => value = e.target.value)
    }

    const secondInputValueChange = (e) => {
        setSecondInputValue(value => value = e.target.value)
    }
    
    const selectFirstValueChange = (e) => {
        setSelectFirstValue(value => value = e.target.value)
    }

    const selectSecondValueChange = (e) => {
        setSelectSecondValue(value => value = e.target.value)
    }

    return (
        <section className='rounded-[10px] md:rounded-[40px] shadow-containerShadow px-[10px] sm:px-[20px] py-[20px] mx-[20px] my-[20px]'>
            <div className='flex flex-col p-[10px] m-[15px]'>
                <span className='font-poppins font-regular text-[16px] text-[#B4B4B4] mt-[5px]'>Date: {new Date().toLocaleDateString()}</span>
                <Clock />
            </div>
            <div className='lg:mx-[90px] lg:my-[80px] mx-[10px] my-[20px]'>
                <div className='flex flex-col gap-[15px] lg:flex-row justify-between items-center'>
                    <Currency heading='Currency you have'>
                        <CurrencySelect selectValueChange={selectFirstValueChange}/>
                        <CurrencyInput name='inputFirst' id='inputFirst' inputValueChange={firstInputValueChange} />
                    </Currency>
                    <div className='w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]'>
                        <img src={arrows} alt="arrows" />
                    </div>
                    <Currency heading='Currency you will receive'>
                        <CurrencySelect selectValueChange={selectSecondValueChange}/>
                        <CurrencyInput name='inputSecond' id='inputSecond' inputValueChange={secondInputValueChange} readOnly={true}/>
                    </Currency>
                </div>

                <Button name='Convert' />
            </div>
        </section>
    )
}

export default ConvertContainer