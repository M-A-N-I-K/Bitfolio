import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../Config/api';

const Carousel = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    async function fetchTrendingCoins() {
        try {
            const response = await axios.get(TrendingCoins("INR"));
            setTrendingCoins(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchTrendingCoins();
    }, []);

    const items = trendingCoins?.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;

        return (
            <Link className="flex flex-col items-center text-white cursor-pointer uppercase"
                to={`/coins/${coin.id}`}
            >
                <img
                    className='w-[100px]'
                    src={coin?.image}
                    alt={coin.name}
                    style={{ marginBottom: 10 }}
                />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                    INR {coin?.current_price.toFixed(2)}
                </span>
            </Link>
        );
    });

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };
    return (
        <div className='flex justify-center items-center h-[50%]'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </div>
    );
}
export default Carousel;