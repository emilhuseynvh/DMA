import React, { useEffect } from 'react';

function Video({ show, setShow }) {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-100 ease-in-out ${show ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setShow(false)}
            ></div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <h2 className='text-[#003269] opacity-20 tracking-wider text-2xl font-bold'>
                    İş dəyərləri aləti
                </h2>
                <div className="w-12/12 md:w-3/4 lg:w-1/2 aspect-w-16 aspect-h-10 h-[400px] mt-6">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <button
                    className="mt-8 px-16 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => setShow(false)}
                >
                    Bağla
                </button>
            </div>
        </>
    );
}

export default Video;
