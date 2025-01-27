import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar'
import RadioOption from '../Components/RadioOption'
import Button from '../Components/UI/Button'
import { IoArrowBack } from 'react-icons/io5'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaCircleCheck } from 'react-icons/fa6'

const experience = [
    'Yoxdur',
    'Təcrübə/könüllük proqramlarında iştirak',
    '0-1 il iş təcrübəsi',
    '2-4 il iş təcrübəsi',
    '5 ildən çox təcrübə',
]

const Experience = () => {
    const [answer, setAnswer] = useState(() => {
        const experience = +localStorage.getItem('experience')
        return experience ? experience : null
    })
    const [message, setMessage] = useState(null)


    const handleAnswerChange = (newAnswer) => {
        setAnswer(newAnswer)
        localStorage.setItem('experience', newAnswer)
        setMessage(true)
    }

    const color = '#ECECEC'

    return (
        <div className='my-[86px]'>
            <ProgressBar i={4} color={color} />
            <RadioOption text='İş təcrübəniz' list={experience} answer={answer} setAnswer={handleAnswerChange} message={message} />
            <div className='w-[500px] mx-auto flex gap-8'>
                <Button send='/education' color='#6A7580' bgcolor='#F8F8F8'>
                    <IoArrowBack /> Geri
                </Button>
                <Button 
                    send={answer !== null ? '/result' : undefined}
                    color={answer !== null ? '#fff' : '#5690FF'} 
                    border={answer === null ? '#CED8E3' : undefined} 
                    bgcolor={answer !== null ? '#2BE597' : 'transparent'}
                    setMessage={setMessage}
                    message={message}
                >
                    Təsdiq et <FaCircleCheck  className='size-4' />
                </Button>
            </div>
        </div>
    )
}

export default Experience
