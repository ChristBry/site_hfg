import Header from '../components/header'
import Footer from '../components/footer'
import NewsLetter from '../components/newsLetter'
import blogimage from '../assets/images/iata.webp'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const blog3 = () => {
    const [refVideo, inView] = useInView({ threshold: 0.2 })
    const [ref1, inView1] = useInView({ threshold: 0.2 })
    const controls = useAnimation()
    const controls1 = useAnimation()
    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0
            })
        }
        if (inView1) {
            controls1.start({
                opacity: 1,
                y: 0
            })
        }
    }, [inView, inView1, controls1, controls])
    return (
        <div>
            <Header />
            <div className="space">

            </div>
            <div className='banner-page'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
                    className='flex flex-col justify-center items-center h-[200px]'
                >
                    <h1 className='text-xl sm:text-2xl lg:text-4xl text-center font-bold'>Industry Recognition: IATA and Commonwealth</h1>
                    <div className="line"></div>
                </motion.div>
            </div>
            <div className='blogpage-part flex flex-col gap-10 lg:gap-4'>
                <div className='flex flex-col sm:flex-row justify-center items-center'>
                    <motion.img src={blogimage} alt="image"
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className='w-[80%]lg:w-[40%] sm:w-[50%] rounded-xl'
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className='blogpage-header'
                    >
                        <h1 className='text-2xl lg:text-4xl font-bold'>More Than Awards — A Shared Mission.</h1>
                        <p className='text-justify'>
                            At YAAPA (Young African Aviation Professionals Association), we believe in hard work, dedication, and a relentless
                            pursuit of excellence in shaping the future of aviation in Africa. That’s why we are both honored and humbled to
                            share some major milestones that reflect not only our commitment, but the trust and recognition we’ve earned from
                            global and regional institutions.
                        </p>
                    </motion.div>
                </div>
                <motion.div ref={refVideo} className='flex justify-center items-center'>
                    <motion.iframe
                        initial={{ opacity: 0, y: 500 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 1 }}
                        src={`https://youtube.com/embed/Y34uqCIaHQU?si=ltMDfZmzkL7hsedf`}
                        title="YouTube Video"
                        className='video-youtube w-[100%] sm:w-[80%] h-[200px] sm:h-[500px]'
                        allowFullScreen
                    />
                </motion.div>
                <motion.div ref={ref1} className='blogpage-content'>
                    <motion.div
                        initial={{opacity: 0, y: 500}}
                        animate={controls1}
                        transition={{ visualDuration: 1, duration: 1 }}
                    >
                        <h4 className='text-2xl font-bold'>The First-Ever IATA High Flyer Award</h4>
                        <p>
                            In collaboration with Qatar Airways, the International Air Transport Association (IATA) awarded YAAPA the first-ever High Flyer Award.
                            This recognition is more than just a trophy it’s a powerful validation of our work in inspiring and guiding the next generation of aviation
                            professionals across Africa. This award showcases our dedication to capacity-building, youth empowerment, and creating impactful pathways
                            into the aviation industry.
                        </p>
                        <h4 className='text-2xl font-bold'>The Commonwealth Point of Light Award</h4>
                        <p>
                            Recognized by Her Majesty The Queen, YAAPA was also the proud recipient of the Commonwealth Point of Light Award. This prestigious honor is
                            granted to individuals or organizations who are making a meaningful difference in their communities. This award reflects our commitment to
                            social impact through aviation, promoting inclusivity, education, and leadership in a sector often seen as out of reach for many young Africans.
                        </p>
                        <h4 className='text-2xl font-bold'>Recognition from the African Civil Aviation Organization (AFCAC)</h4>
                        <p>
                            During the 50th anniversary of the African Civil Aviation Organization (AFCAC), YAAPA received a Certificate of Recognition for its efforts in youth
                            engagement and aviation development on the continent. This moment marked a milestone in our journey standing side by side with policymakers, regulators,
                            and industry leaders, reinforcing the need for youth voices in aviation’s future.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default blog3