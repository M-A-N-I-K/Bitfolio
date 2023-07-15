import React from 'react'
import Img from "../assets/img2.jpg"

const heroSection = () => {
    return (

        <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
            backgroundPosition: 1 / 2,
            backgroundImage: `url(${Img})`,
            height: 500,
        }}
        >
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-7xl">
                            BitFolio
                        </h1>
                        <p className="mt-2 mb-16 text-md font-bold tracking-tight md:text-xl xl:text-2xl">
                            Get All The Information Regarding Your Favorite Crypto Currency
                        </p>
                        <button type="button"
                            className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                            data-te-ripple-init data-te-ripple-color="light">
                            Get started
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default heroSection
