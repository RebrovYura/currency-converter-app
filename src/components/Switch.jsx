import arrows from '../assets/icons/arrows.svg'

const Switch = (props) => {

  return (
    <>
      <img
        src={arrows}
        alt="arrow"
        className='cursor-pointer'
        onClick={props.handleClick} />
    </>
  )
}

export default Switch