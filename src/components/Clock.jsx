import { useState, useEffect } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return (
        <span className='font-poppins font-regular text-[16px] text-[#B4B4B4]'>Date: {date.toLocaleTimeString()}</span>
    )
}

export default Clock