import React from 'react'
import { useState } from 'react';
import ConfettiExplosion from "react-confetti-explosion";




const DownloadCoverItem = ({ cover, index }) => {

    const [showCopyAnimation, setShowCopyAnimation] = useState(false)
    const [isExploding, setIsExploding] = useState(false);

    const ConfettiOptions = {
        force: 0.9,
        duration: 3000,
        particleCount: 90,

    };

    const onClickCover = (cover, index) => {
        navigator.clipboard.writeText(cover)
        console.log(index)
        setShowCopyAnimation(true)
        setIsExploding(!isExploding)
        setTimeout(() => {
            setShowCopyAnimation(false)
        }, 2550);
    }

    return (
        <section key={index} className="break-inside overflow-hidden cursor-pointer  relative isolate border-2 border-stone-950 bg-white rounded-md hover:shadow-dark transition-all" onClick={() => onClickCover(cover, index)}>
            <img
                src={cover}
                alt=""
                className=" w-full object-cover rounded-md object-center"
            />

            {showCopyAnimation &&
                <>
                    <div key={index} className="h-full w-full bg-gray-200 absolute top-0 z-10 grid place-content-center overflow-hidden  opacity-60 duration-150">
                        <div className="grid place-content-center">
                            <img
                                src="/img/nouti-chasquido.gif"
                                alt=""
                                className=" place-content-center h-16 sm:h-32"
                            />
                        </div>
                        <span className="font-sub text-base sm:text-2xl font-black pb-2"> Copiada tu cover</span>
                        <ConfettiExplosion {...ConfettiOptions} />
                    </div>
                </>
            }

        </section>
    )
}

export default DownloadCoverItem