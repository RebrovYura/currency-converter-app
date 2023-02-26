const CurrencyInput = (props) => {
  const handleChange = (e) => {
    props.onInputChange(e.target.value)
  }

  return (
    <div>
      <input
        type="number"
        name={props.name}
        id={props.id}
        readOnly={props.readOnly}
        className='font-poppins font-semibold text-secondary w-full text-[20px] lg:text-[24px] my-[10px] lg:my-[15px] h-[100px] md:h-[150px] bg-input outline-none px-[20px] py-[10px] lg:p-[25px] rounded-[5px]'
        value={props.value || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export default CurrencyInput