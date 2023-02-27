import { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'

import Clock from './Clock'
import Currency from './currencyInfo/Currency'
// import Button from './Button'
import CurrencySelect from './currencyInfo/CurrencySelect'
import CurrencyInput from './currencyInfo/CurrencyInput'
import ExchangeRates from './currencyInfo/ExchangeRates'
import currency from '../data/currency.json'
import arrows from '../assets/icons/arrows.svg'

const ConvertContainer = () => {

    const _apiKey = '1bea0341d31c1c930feca829'
    let result = ''

    const [inputValue, setInputValue] = useState()
    const [inputResultValue, setInputResultValue] = useState(inputValue)
    const [selectFirstValue, setSelectFirstValue] = useState(currency[0].code)
    const [selectSecondValue, setSelectSecondValue] = useState(currency[0].code)

    useEffect(() => {
        if (inputValue !== '') {
            currencyConvert(inputValue)
        }
    }, [inputValue, selectFirstValue, selectSecondValue, inputResultValue])

    const handleValueChange = (value) => {
        if (value.length > 9) {
            value = value.slice(0, 9)
        }
        setInputValue(value)
        currencyConvert(value)
    }

    const selectFirstValueChange = (e) => {
        setSelectFirstValue(e.target.value)
    }

    const selectSecondValueChange = (e) => {
        setSelectSecondValue(e.target.value)
    }

    async function currencyConvert(value) {
        await fetch(`https://v6.exchangerate-api.com/v6/${_apiKey}/pair/${selectFirstValue}/${selectSecondValue}/${value}`)
            .then(response => response.json())
            .then(json => setInputResultValue(json.conversion_result))
    }

    return (
        <section className='rounded-[10px] md:rounded-[40px] shadow-containerShadow px-[10px] sm:px-[20px] py-[20px] mx-[20px] my-[20px]'>
            <Clock />
            <div className='lg:mx-[90px] lg:my-[80px] mx-[10px] my-[20px]'>
                <div className='flex flex-col gap-[15px] lg:flex-row justify-between items-center'>
                    <Currency heading='Currency you have'>
                        <CurrencySelect selectValueChange={selectFirstValueChange} />
                        <CurrencyInput name='inputFirst' id='inputFirst' value={inputValue} onInputChange={handleValueChange}/>
                    </Currency>
                    <div className='w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]'>
                        <img src={arrows} alt="arrows" />
                    </div>
                    <Currency heading='Currency you will receive'>
                        <CurrencySelect selectValueChange={selectSecondValueChange} />
                        <CurrencyInput name='inputSecond' id='inputSecond' value={inputResultValue} onInputChange={handleValueChange} readOnly={true}/>
                    </Currency>
                </div>
                {/* <Button bgColor='#252525' color='#ffffff' variant='solid' onClick={() => currencyConvert()}>Convert</Button> */}
            </div>
        </section>
    )
}

export default ConvertContainer