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

    const [firstInputValue, setFirstInputValue] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')
    const [selectFitstValue, setSelectFirstValue] = useState(currency[0].code)
    const [selectSecondValue, setSelectSecondValue] = useState(currency[0].code)


    const firstInputValueChange = (e) => {
        setFirstInputValue(value => value = e.target.value)
    }

    function secondInputValueChange(e) {
        setSecondInputValue(value => e.target.value = value)
    }

    const selectFirstValueChange = (e) => {
        setSelectFirstValue(value => value = e.target.value)
    }

    const selectSecondValueChange = (e) => {
        setSelectSecondValue(value => value = e.target.value)
    }

    function currencyConvert() {
        fetch(`https://v6.exchangerate-api.com/v6/${_apiKey}/pair/${selectFitstValue}/${selectSecondValue}/${firstInputValue}`)
            .then(response => response.json())
            .then(json => setSecondInputValue(value => value = json.conversion_result))
    }

    useEffect = (() => {
        selectSecondValueChange()
    })

    return (
        <section className='rounded-[10px] md:rounded-[40px] shadow-containerShadow px-[10px] sm:px-[20px] py-[20px] mx-[20px] my-[20px]'>
            <Clock />
            <div className='lg:mx-[90px] lg:my-[80px] mx-[10px] my-[20px]'>
                <div className='flex flex-col gap-[15px] lg:flex-row justify-between items-center'>
                    <Currency heading='Currency you have'>
                        <CurrencySelect selectValueChange={selectFirstValueChange} />
                        <CurrencyInput name='inputFirst' id='inputFirst' inputValueChange={firstInputValueChange} />
                    </Currency>
                    <div className='w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]'>
                        <img src={arrows} alt="arrows" />
                    </div>
                    <Currency heading='Currency you will receive'>
                        <CurrencySelect selectValueChange={selectSecondValueChange} />
                        <CurrencyInput name='inputSecond' id='inputSecond' inputValueChange={secondInputValueChange} />
                    </Currency>
                </div>

                {/* <Button name='Convert' /> */}
                <Button onClick={() => currencyConvert()}>Convert</Button>
            </div>
        </section>
    )
}

export default ConvertContainer