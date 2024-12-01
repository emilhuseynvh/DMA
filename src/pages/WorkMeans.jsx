import { useState } from 'react';
import { FaChevronLeft, FaCompass } from 'react-icons/fa';
import { LuFileVideo } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Video from '../Components/Video';

function WorkMeans() {
    const [show, setShow] = useState(false)
    return (
        <div className='bg-[#FFFFFF]'>
            <div className='max-w-[1300px] mx-auto'>
                <div className='py-20 w-full mx-auto'>
                    <div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[#003269] opacity-20 tracking-wider text-2xl font-bold'>
                                İş dəyərləri aləti
                            </h2>
                            <h1 className='text-[#003269] text-5xl font-bold '>
                                Qaydalar
                            </h1>
                            <h2 className='text-[#003269] tracking-wider text-3xl font-medium'>
                                Test başlayarkən ekranda <span className='text-blue-500 opacity-90'>20 kart</span> görəcəksiniz
                            </h2>
                        </div>
                        <div className="flex py-8 text-xl ">
                            <div className="flex flex-row justify-between gap-4 mt-8">
                                <div className="relative bg-blue-500 h-[150px] text-white p-6 rounded-2xl w-full md:w-1/3 flex flex-col justify-center items-center">
                                    <div className="absolute top-[-20px] w-12 h-12 text-white border-[2px] border-white bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <p className="text-left">
                                        Bu kartları yerləşdirmək üçün <span className="font-bold">5 sütun</span> ayrılmışdır.
                                    </p>
                                </div>
                                <div className="relative bg-blue-500 h-[150px] justify-center text-white p-6 rounded-2xl w-full md:w-1/3 flex flex-col items-center">
                                    <div className="absolute top-[-20px] w-12 h-12 text-white border-[2px] border-white bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <p className="text-left">
                                        Hər bir sütuna cəmi <span className="font-bold">4 kart</span> yerləşdirə bilərsiniz.
                                    </p>
                                </div>
                                <div className="relative bg-blue-500 h-[150px] justify-center  text-white p-6 rounded-2xl w-full md:w-1/3 flex flex-col items-center">
                                    <div className="absolute top-[-20px] w-12 h-12 text-white border-[2px] border-white bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <p className="text-left">
                                        Kartları diqqətlə oxuyun və onları <span className="font-bold">əhəmiyyət dərəcəsinə</span> əsasən 5 sütuna yerləşdirin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='py-10 mx-auto'>
                            <ul className='text-[#7A869A] text-xl tracking-wider leading-10'>
                                <li>5-ci sütunda ən <span className='font-bold'>əhəmiyyətli</span> 4 kart;</li>
                                <li>4-cü sütunda <span className='font-bold'>əhəmiyyətli</span> 4 kart;</li>
                                <li>3-cü sütunda <span className='font-bold'>orta dərəcədə əhəmiyyətli</span> 4 kart;</li>
                                <li>2-ci sütunda <span className='font-bold'>az əhəmiyyətli</span> 4 kart;</li>
                                <li>1-ci sütunda isə sizin üçün ən az <span className='font-bold'>əhəmiyyət</span> kəsb edən 4 kartı yerləşdirə bilərsiniz.</li>
                            </ul>
                        </div>
                        <div className='mx-auto w-full py-10'>
                            <div className='flex w-full justify-center gap-6'>
                                <Link to='/' className="flex items-center justify-center gap-2 border-2 border-[#CBD5E0] text-[#7A869A] px-16 py-2 rounded-md">
                                    <FaChevronLeft />
                                    <span className='font-semibold tracking-wide text-sm'> Əvvələ qayıt </span>

                                </Link>
                                <button onClick={() => setShow(true)} className="flex items-center justify-center  gap-1 border-2 border-[#CBD5E0] text-[#7A869A] px-4 py-2 rounded-md">
                                    <LuFileVideo className='text-3xl text-white fill-[#7A869A]' />
                                    <span className='font-semibold tracking-wide text-sm'>Təlimat videosuna bax</span>
                                </button>
                                <Link to={"/test"} className="flex items-center justify-center gap-2 bg-[#007BFF] text-white px-16 py-3 rounded-md">
                                    <FaCompass className='rotate-90' />
                                    <span className='font-semibold tracking-wide text-sm'>Testə başla</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Video setShow={setShow} show={show} />
        </div>

    )
}

export default WorkMeans