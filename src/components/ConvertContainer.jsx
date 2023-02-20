import Clock from './Clock'
import Currency from './currencyInput/Currency'
import Button from './Button'
import arrows from '../assets/icons/arrows.svg'

const ConvertContainer = () => {

    return (
        <section className='rounded-[10px] md:rounded-[40px] shadow-lg px-[10px] sm:px-[20px] py-[20px] mx-[20px] my-[20px]'>
            <div className='flex flex-col'>
                <span className='font-poppins font-regular text-[16px] text-[#B4B4B4] mt-[5px]'>Date: {new Date().toLocaleDateString()}</span>
                <Clock />
            </div>
            <div className='lg:mx-[90px] lg:my-[80px] mx-[10px] my-[20px]'>
                <div className='flex flex-col gap-[15px] lg:flex-row justify-between items-center'>
                    <Currency heading='Currency you have' />
                    <div className='w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]'>
                        <img src={arrows} alt="arrows" />
                    </div>
                    <Currency heading='Currency you will receive' />
                </div>
                <Button name='Convert' />
            </div>
        </section>
    )
}

export default ConvertContainer