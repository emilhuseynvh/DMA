import React, { useState } from 'react'
import RadioOption from '../Components/RadioOption'
import Button from '../Components/UI/Button'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const evaluate = ['Tam razıyam', 'Razıyam', 'Orta dərəcədə razıyam', 'Qismən razıyam', 'Heç razı deyiləm']

const Evaulate = () => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState(null)


    const handleSubmit = () => {
        const selectedFeedback = evaluate[answer];
        const templateParams = {
            to_name: 'DMA User',
            feedback: selectedFeedback,
        };

        emailjs
            .send('service_xxtnida', 'template_czlxbyb', templateParams, 'gU7LOj6R9IaEoO34c')
            .then(() => {
                alert('Məlumat uğurla göndərildi!');
            })
            .catch((error) => {
                console.error('Email göndərilmə xətası:', error);
            });
    };

    return (
        <div className='bg-[#F8F8F8] w-screen h-screen py-40'>
            <div>
                <div className="absolute top-[300px]"><img src="assets/img/_b14be35a-6806-4ff9-b756-40f9df3013fa 2.png" alt="" /></div>
                <div className="absolute right-0 top-[452px]"><img src="assets/img/baloon.png" alt="" /></div>
                <div className="absolute left-6 top-[625px]"><img src="assets/img/Layer-0-copy1 3.png" alt="" /></div>
                <div className="absolute top-40 right-0"><img src="assets/img/Layer-0-copy1 4.png" alt="" /></div>
                <div className="absolute top-[750px] right-16"><img src="assets/img/star2.png" alt="" /></div>
            </div>
            <div className='bg-white w-[1224px] mx-auto py-9 h-[500px] rounded-2xl'>
                <RadioOption evaluate={true} answer={answer} list={evaluate} text='Nəticənizi qiymətləndirin' setAnswer={setAnswer} />
            </div>
            <div onClick={() => answer !== null && handleSubmit()} className='mx-auto w-[300px] mt-12'>
                <Button bgcolor={answer !== null ? '#1DDD76' : '#fff'} color={answer !== null ? '#fff' : '#32A9FF'}>
                    <p>Təsdiq et</p>
                    {answer !== null ? <img src="assets/img/agree.svg" alt="Icon" /> : <img src="assets/img/agree2.svg" alt="Icon" />}
                </Button>
            </div>
        </div>
    )
}

export default Evaulate