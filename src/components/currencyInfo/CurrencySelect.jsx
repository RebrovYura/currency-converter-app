import { useState } from 'react'
import { Select } from '@chakra-ui/react';
import currency from '../../data/currency.json';

const CurrencySelect = (props) => {
  const [code, setCode] = useState(currency[0].code)

  return (
    <>
      <Select
        bg='#F1F4FB'
        border='#F1F4FB'
        focusBorderColor='#F1F4FB'
        borderRadius='5px'
        className='font-poppins font-semibold'
        onChange={props.selectValueChange}
        value={props.selectValue}
        >
        {
          currency.map(item => (
            <option value={item.code} key={item.code}>{item.code} - {item.name}</option>
          ))
        }
      </Select>
    </>
  )
}

export default CurrencySelect