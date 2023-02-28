import { Select } from '@chakra-ui/react';
import currency from '../../data/currency.json';

const CurrencySelect = (props) => {

  return (
    <>
      <Select
        bg='#F1F4FB'
        border='#F1F4FB'
        focusBorderColor='#F1F4FB'
        borderRadius='5px'
        className='font-poppins font-semibold dark:text-primary dark:bg-darkbg text-secondary bg-input'
        onChange={props.selectValueChange}
        value={props.selectValue}
      >
        {
          currency.map(item => (
            <option
              value={item.code}
              key={item.code}
              className='dark:bg-darkbg text-secondary dark:text-primary'
            >
              {item.code} - {item.name}
            </option>
          ))
        }
      </Select>
    </>
  )
}

export default CurrencySelect