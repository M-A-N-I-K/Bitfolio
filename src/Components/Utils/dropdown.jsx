import React, { useState } from 'react'

const dropdown = () => {
    const [toggleDropdown, setToggleDropDown] = useState(false);

    return (
        <>
            <button id="dropdownDefaultButton" onClick={() => setToggleDropDown(!toggleDropdown)} data-dropdown-toggle="dropdown" className="text-black bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:text-white dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800" type="button">Currency <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg></button>
            <div id="dropdown" className={`z-10 ${toggleDropdown ? "absolute" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USD ($)</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">INR (₹ )</a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default dropdown
