import Header from '../components/header'
import Footer from '../components/footer'
import NewsLetter from '../components/newsLetter'
import blogimage from '../assets/images/fadi_amadeus.webp'
import { motion } from 'framer-motion'

const blog5 = () => {
    return (
        <div>
            <Header />
            <div className="space">

            </div>
            <div className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'>
                <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold'>MEDAYS INVESTMENTS SUMMIT</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
                    className="line"
                />
            </div>
            <div className='blogpage-part flex flex-col gap-10 lg:gap-4'>
                <div className='flex flex-col sm:flex-row justify-center items-center'>
                    <img src={blogimage} alt="image" className='w-[80%]lg:w-[40%] sm:w-[50%] rounded-xl' />
                    <div className='blogpage-header'>
                        <h1 className='text-2xl lg:text-4xl font-bold'>Panel 6 — Invest in Tourism & Hospitality: Catalyst for Economic Growth</h1>
                        <p className='text-justify'>
                            At the heart of the MEDays 2025 discussions, our renowned consultant, Ms. Fadimatou Noutchemo, will have the honor
                            of moderating a crucial discussion on how tourism and hospitality can serve as powerful drivers for sustainable
                            economic development and cross-border investment opportunities. This exclusive session will explore key strategies
                            for unlocking the untapped potential of these vital sectors.
                        </p>
                    </div>
                </div>
                <div className='blogpage-content'>
                    <h4 className='text-2xl font-bold'>MEDays: A Crossroads for Strategic Investments</h4>
                    <p>
                        The MEDays Investments Summit is recognized globally as an essential platform for strategic discussions
                        on the economic challenges facing the Global South. The participation of Ms. Noutchemo, representing the
                        HEFA Group, underscores our commitment to positioning tourism and hospitality as key drivers of inclusive
                        and diversified growth in Africa. This panel provides a unique opportunity to forge partnerships and mobilize
                        capital for projects with a strong social and economic impact.
                    </p>

                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default blog5