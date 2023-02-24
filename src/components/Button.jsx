import React from 'react'

const Button = (props) => {
  return (
    <form action='/converter' onSubmit={(e) => (e.preventDefault())}>
      <button className='bg-secondary text-primary font-poppins font-bold text-[16px] md:text-[20px] px-[35px] py-[13px] md:px-[40px] md:py-[15px] rounded-[10px] my-[20px] hover:opacity-80 transition-opacity'
        onClick={() => console.log('asdasdasd')}
      >
        {props.name}
      </button>
    </form>
  )
}

export default Button