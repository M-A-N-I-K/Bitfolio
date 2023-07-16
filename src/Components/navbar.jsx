import React from 'react'
import Switcher from './Utils/switcher'
import Crypto from "../assets/crypto.png"
import Dropdown from './Utils/dropdown'

const navbar = () => {

    return (
        <nav className="bg-white sticky top-0 z-30 border-gray-200 dark:bg-gray-900 dark:bg-opacity-90">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <img src={Crypto} className="h-8 mr-3" alt="Bitfolio Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BitFolio</span>
                </a>
                <Switcher />
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <Dropdown />
                        </li>
                        <li>
                            <button type="button" className="text-black bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-[1px] border-black dark:border-[1px] dark:border-white dark:text-white dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default navbar
