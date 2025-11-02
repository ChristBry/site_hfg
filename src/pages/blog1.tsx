import Header from '../components/header'
import Footer from '../components/footer'
import NewsLetter from '../components/newsLetter'
import blogimage from '../assets/images/news2.webp'
import { motion } from 'framer-motion'

const blog1 = () => {
    return (
        <div>
            <Header />
            <div className="space">

            </div>
            <div className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'>
                <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold'>Unlocking Your Company's Potential</h1>
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
                        <h1 className='text-2xl lg:text-4xl font-bold'>Partner with HEFA Group and Unlock What’s Next</h1>
                        <p className='text-justify'>
                            In today’s fast-changing world, success is no longer just about having a good product
                            or service it’s about adaptability, clarity of vision, and the ability to execute with purpose.
                            At HEFA Group, we believe that every company has a unique potential just waiting to be unlocked.
                        </p>
                    </div>
                </div>
                <div className='blogpage-content'>
                    <h4 className='text-2xl font-bold'>A Personalized Approach for Real Impact</h4>
                    <p>
                        At HEFA Group, we don’t believe in one-size-fits-all solutions. Our consulting method is agile,
                        personalized, and human-centered. We take the time to understand your company’s DNA, its challenges,
                        and above all, its untapped opportunities. From startups to established enterprises, we adapt our approach
                        to fit your context, ambitions, and pace.
                    </p>
                    <h4 className='text-2xl font-bold'>Discovering Your Growth Drivers</h4>
                    <p>
                        Every business has hidden levers of growth—sometimes in its operations, sometimes in its people, or its market positioning.
                        Our mission? Help you identify and activate those drivers through structured analysis and co-built strategies. Whether it’s
                        entering a new market, improving internal workflows, or redefining your customer value proposition, we’re here to guide you
                        every step of the way.
                    </p>
                    <h4 className='text-2xl font-bold'>Process Optimization That Makes a Difference</h4>
                    <p>
                        Time is money—and so is inefficiency. At HEFA Group, we help you streamline your operations, automate where it makes sense, and make
                        your internal processes work for you, not against you. We bring clarity, structure, and efficiency, enabling your teams to focus on
                        what really matters: delivering value and scaling with confidence.
                    </p>
                    <h4 className='text-2xl font-bold'>Innovating with Sustainability in Mind</h4>
                    <p>
                        Growth is great—but lasting growth is even better. That’s why our approach to innovation is grounded in sustainability and long-term thinking.
                        We help you design solutions that are not just cutting-edge, but also responsible, scalable, and future-ready.
                    </p>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default blog1