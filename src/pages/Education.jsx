import React, { useState } from 'react'
import ProgressBar from '../Components/ProgressBar'
import RadioOption from '../Components/RadioOption'
import Button from '../Components/UI/Button'
import { IoArrowBack } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";

const education = [
    'Ümumi orta təhsil',
    'Peşə təhsili',
    'Kollec və ya subbakalavr',
    'Bakalavr dərəcəsi',
    'Magistr və üzəri ali təhsil'
]

const Education = () => {
    const [answer, setAnswer] = useState(() => {
        const education = +localStorage.getItem('education');
        return education ? education : null;
    });

    const handleAnswerChange = (newAnswer) => {
        setAnswer(newAnswer);
        localStorage.setItem('education', newAnswer);
    };

    const color = '#ECECEC';

    return (
        <div className='my-[86px]'>
            <ProgressBar i={3} color={color} />
            <RadioOption text='Son aldığınız təhsil' list={education} answer={answer} setAnswer={handleAnswerChange} />
            <div className='w-[500px] mx-auto flex gap-8'>
                <Button send='/test' color='#6A7580' bgcolor='#F8F8F8'>
                    <IoArrowBack /> Geri
                </Button>
                <Button 
                    send={answer !== null ? '/experience' : undefined} 
                    color={answer !== null ? '#fff' : '#32A9FF'} 
                    border={answer === null ? '#CED8E3' : undefined} 
                    bgcolor={answer !== null ? '#32A9FF' : 'transparent'}
                >
                    Növbəti <HiArrowNarrowRight className='size-4' />
                </Button>
            </div>
        </div>
    )
}

export default Education;
