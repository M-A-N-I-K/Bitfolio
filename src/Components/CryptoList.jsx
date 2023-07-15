import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CryptoList = () => {
    const [coinData, setCoinData] = useState();
    async function getCoinData() {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
            setCoinData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCoinData();
    }, []);
    return (
        <>
            <div className='mt-12 p-4'>
                <h1 className="text-3xl text-center font-bold dark:text-white tracking-tight md:text-2xl xl:text-4xl">
                    Cryptocurrency Prices by Market Cap
                </h1>
                <div className="flex p-4 items-center justify-center pb-4 bg-white dark:bg-gray-900">
                    <div className="relative mb-3 bg-gray-800 rounded-md h-12 w-[80vw]" data-te-input-wrapper-init>
                        <input
                            type="search"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent pt-4 px-4 py-1 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleSearch2"
                            placeholder="Type query" />
                        <label
                            htmlFor="exampleSearch2"
                            className="pointer-events-none absolute left-3 top-1 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.35rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.35rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Search For a Cryptocurrency</label>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-6 relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Coin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                24h Change
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Market Cap
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinData?.map((coin, key) => {
                            return (
                                <tr key={key} className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={coin.image} alt="Jese image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{coin.symbol.toUpperCase()}</div>
                                            <div className="font-normal text-gray-500">{coin.name}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-white font-semibold">
                                        ₹ {coin.current_price.toLocaleString('en-US')}
                                    </td>
                                    <td className={`px-6 py-4${Number(coin.market_cap_change_percentage_24h) < 0 ? " text-red-400" : " text-green-500"} font-semibold`}>
                                        {Number(coin.market_cap_change_percentage_24h).toFixed(2)}%
                                    </td>
                                    <td className="px-6 py-4 text-white font-semibold">
                                        ₹ {coin.market_cap.toLocaleString('en-US')}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <ul className="list-style-none pt-4 flex justify-between">
                    <li>
                        <a
                            className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                        >Previous</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >1</a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-gray-500 transition-all duration-300"
                            href="#!"
                        >2
                            <span
                                className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                            >(current)</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >3</a
                        >
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                            href="#!"
                        >Next</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default CryptoList
