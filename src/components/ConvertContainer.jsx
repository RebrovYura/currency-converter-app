import { useState, useEffect } from 'react'

import Clock from './Clock'
import Currency from './currencyInfo/Currency'
import CurrencySelect from './currencyInfo/CurrencySelect'
import CurrencyInput from './currencyInfo/CurrencyInput'
import Switch from './Switch'
import ExchangeRates from './currencyInfo/ExchangeRates'
import currency from '../data/currency.json'

const ConvertContainer = () => {
    const _apiKey = '1bea0341d31c1c930feca829'
    const _apiBase = 'https://v6.exchangerate-api.com/v6/'

    const [inputValue, setInputValue] = useState(1000)
    const [inputResultValue, setInputResultValue] = useState(inputValue)
    const [selectFirstValue, setSelectFirstValue] = useState(currency[0].code)
    const [selectSecondValue, setSelectSecondValue] = useState(currency[0].code)
    const [rate, setRate] = useState('')

    useEffect(() => {
        if (inputValue !== undefined) {
            getCurrencyPair()
        }
    }, [inputValue, selectFirstValue, selectSecondValue])

    const handleValueChange = (value) => {
        if (value.length > 9) {
            value = value.slice(0, 9)
        }
        setInputValue(value)
    }

    const selectFirstValueChange = (e) => {
        setSelectFirstValue(e.target.value)
    }

    const selectSecondValueChange = (e) => {
        setSelectSecondValue(e.target.value)
    }

    const handleClick = () => {
        let tempInput = inputValue
        let tempSelect = selectFirstValue

        setInputValue(inputResultValue)
        setInputResultValue(tempInput)

        setSelectFirstValue(selectSecondValue)
        setSelectSecondValue(tempSelect)
    }

    const getRecources = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    const getCurrencyPair = async () => {
        const res = await getRecources(`${_apiBase}${_apiKey}/pair/${selectFirstValue}/${selectSecondValue}/${inputValue}`)
        setInputResultValue(res.conversion_result)
        setRate(res.conversion_rate)
    }

    return (
        <section className='rounded-[10px] md:rounded-[40px] dark:shadow-buttonShadow shadow-containerShadow px-[10px] sm:px-[20px] py-[20px] mx-[20px] my-[20px]'>
            <div className='lg:mx-[90px] lg:my-[80px] mx-[10px] my-[20px]'>
                <Clock />
                <div className='flex flex-col gap-[15px] lg:flex-row justify-between items-center'>
                    <Currency heading='Currency you have'>
                        <CurrencySelect selectValueChange={selectFirstValueChange} selectValue={selectFirstValue} />
                        <CurrencyInput name='inputFirst' id='inputFirst' value={inputValue.toString().slice(0, 9)} onInputChange={handleValueChange} />
                    </Currency>
                    <div className='w-[40px] h-[40px] lg:w-[52px] lg:h-[52px]'>
                        <Switch handleClick={handleClick} />
                    </div>
                    <Currency heading='Currency you will receive'>
                        <CurrencySelect selectValueChange={selectSecondValueChange} selectValue={selectSecondValue} />
                        <CurrencyInput name='inputSecond' id='inputSecond' value={inputResultValue.toString().slice(0, 9)} onInputChange={handleValueChange} readOnly={true} />
                    </Currency>
                </div>
                <ExchangeRates rate={rate} selectFirstValue={selectFirstValue} selectSecondValue={selectSecondValue} />
            </div>
        </section>
    )
}

export default ConvertContainer