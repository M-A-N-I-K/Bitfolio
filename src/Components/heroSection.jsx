import React from 'react'
import Img from "../assets/img2.jpg"
import Carousel from './Utils/carousel'

const heroSection = () => {
    return (

        <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
            backgroundPosition: 1 / 2,
            backgroundImage: `url(${Img})`,
            height: 500,
        }}
        >
            <div className="flex flex-col justify-around h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-7xl">
                            BitFolio
                        </h1>
                        <p className="mt-2 mb-16 text-md font-bold tracking-tight md:text-xl xl:text-2xl">
                            Get All The Information Regarding Your Favorite Crypto Currency
                        </p>

                    </div>
                    <Carousel />
                </div>
            </div>

        </div>
    )
}

export default heroSection
