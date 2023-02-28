const ExchangeRates = (props) => {
  return (
    <div className='font-semibold'>
        <span>1 {props.selectFirstValue} = {props.rate} {props.selectSecondValue}</span>
    </div>
  )
}

export default ExchangeRates