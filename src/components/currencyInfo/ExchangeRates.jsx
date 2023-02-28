const ExchangeRates = (props) => {
  return (
    <div className='font-semibold dark:text-input text-secondary'>
        <span>1 {props.selectFirstValue} = {props.rate} {props.selectSecondValue}</span>
    </div>
  )
}

export default ExchangeRates