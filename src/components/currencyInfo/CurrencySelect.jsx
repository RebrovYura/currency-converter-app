import React from 'react'
import { Select } from '@chakra-ui/react';
import currency from '../../data/currency.json';
import usd from '../../assets/images/flags/usd.svg';

const CurrencySelect = () => {
  return (
    <div>
      <Select bg='#F1F4FB' border='#F1F4FB' focusBorderColor='#F1F4FB'>
        {
          currency.map(item => (
            <option value="" key={item.code}>{item.code} - {item.name}</option>
          ))
        }
      </Select>
    </div>
  )
}

export default CurrencySelect