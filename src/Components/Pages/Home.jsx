import Navbar from '../navbar'
import HeroSection from '../heroSection'
import CryptoList from '../CryptoList'
function Home() {
    return (
        <>
            <div className='bg-gray-50 border-gray-200 dark:bg-gray-900'>
                <Navbar />
                <HeroSection />
                <CryptoList />
            </div>
        </>
    )
}

export default Home