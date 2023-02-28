import { useState, useEffect } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <div className='font-poppins font-regular text-[16px] text-[#B4B4B4] flex flex-col mb-[20px]'>
            <span className='mt-[5px]'>Date: {new Date().toLocaleDateString()}</span>
            <span>Time: {date.toLocaleTimeString()}</span>
        </div>
    )
}

export default Clock