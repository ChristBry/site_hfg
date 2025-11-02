import '../styles/mainStyle.css'
import Header from '../components/header'
import AboutImage from '../assets/images/vision1.webp'
import { Link } from 'react-router-dom'
import Why from '../assets/images/why.webp'
import Fadi from '../assets/images/fadi.webp'
import News1 from '../assets/images/news2.webp'
import News2 from '../assets/images/saatm.webp'
import Faq from '../assets/images/faq.webp'
import Footer from '../components/footer'
import Stats from '../components/stats'
import NewsLetter from '../components/newsLetter'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const home = () => {

    const [isOpenFaq1, setIsOpenFaq1] = useState(false)
    const [isOpenFaq2, setIsOpenFaq2] = useState(false)
    const [isOpenFaq3, setIsOpenFaq3] = useState(false)
    const faqRef1 = useRef<HTMLDivElement>(null)
    const faqRef2 = useRef<HTMLDivElement>(null)
    const faqRef3 = useRef<HTMLDivElement>(null)
    const [refServices, inView] = useInView({ threshold: 0.1 })
    const [refWhy, inView1] = useInView({ threshold: 0.2 })
    const [refTeam, inView2] = useInView({ threshold: 0.3 })
    const [refArticles, inView3] = useInView({ threshold: 0.3 })
    const [refFaq, inView4] = useInView({ threshold: 0.3 })
    const controls = useAnimation();
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();
    const handleClickFaq = (event: React.MouseEvent<HTMLDivElement>) => {
        if (faqRef1.current === event.currentTarget) {
            setIsOpenFaq1(!isOpenFaq1)
        }
        if (faqRef2.current === event.currentTarget) {
            setIsOpenFaq2(!isOpenFaq2)
        }
        if (faqRef3.current === event.currentTarget) {
            setIsOpenFaq3(!isOpenFaq3)
        }
    }

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
            })
        }
        if (inView1) {
            controls.start({
                opacity: 1,
                y: 0
            })
        }
        if (inView2) {
            controls1.start({
                opacity: 1,
                y: 0
            })
        }
        if (inView3) {
            controls2.start({
                opacity: 1,
                x: 0
            })
        }
        if (inView3) {
            controls3.start({
                opacity: 1,
                y: 0
            })
        }
        if (inView4) {
            controls4.start({
                opacity: 1,
                y: 0
            })
            controls5.start({
                opacity: 1,
                x: 0
            })
        }
    }, [inView, inView1, inView2, inView3, inView4, controls, controls1, controls2, controls3, controls4])


    return (
        <div className='home'>
            <div>
                <Header />
                <div className="space">

                </div>
                <div className='banner'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, scale: { ease: "easeOut", visualDuration: 2, bounce: 0.2 }, delay: 0.3 }}
                    >
                        <p className='business w-[70%] sm:w-[30%] xl:w-[20%] text-center rounded-full'>Business Consulting</p>
                        <h1 className='text-3xl font-bold'>Empowering Your Business With Us</h1>
                        <p className='description text-sm'>Experience unparallaled growth with our expert guidance. Navigate challenges, seize opportunities, and<br className='hidden sm:flex' />
                            watch your business flourish under our exceptional consulting excellence.
                        </p>
                        <div className='banner-contact w-[250px] flex items-center justify-center rounded-full'>
                            <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Make an appointment<i className="fa-brands fa-whatsapp text-3xl"></i></a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="about flex flex-col lg:flex-row-reverse items-center"
            >
                <div className="about-container">
                    <h4 className='w-40 text-center rounded-full'>About Us</h4>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Taking Your Business To<br /> The Next Level</h2>
                    <p className='text-justify text-lg'>We are a team of African consultants who support business development
                        in Africa through strategic support and high-level technical execution.</p>
                    <h2 className='text-2xl sm:text-2xl'>Our Vision and Values</h2>

                    <p className='text-justify text-lg'>People join HEFA Group because they share our vision of making a real and lasting impact on Africa's development. They believe in
                        our values and ethics, and above all, they want to make a difference.
                        Our core values include performance and results (creating the best possible outcomes for clients), integrity and accountability
                        (acting ethically and taking full responsibility), and professionalism and responsiveness (creating efficient work environments
                        internally and with clients).
                    </p>
                </div>
                <motion.img src={AboutImage} alt='about' className='about-img cursor-pointer hover:scale-105 transition-all duration-300 w-[100%] sm:w-[60%] h-[100%] lg:w-[40%] xl:w-[50%]' />
            </motion.div>

            <motion.div
                className='service-part flex flex-col items-center'
            >
                <div className='service-description flex flex-col items-center'>
                    <h4 className='rounded-full w-50 text-center'>Our Services</h4>
                    <h2 className='text-center text-2xl sm:text-4xl font-bold'>Discover Your Business Needs</h2>
                    <p className='text-center text-xl'>We are specialize in building and managing teams of highly qualified advisors who strengthen your internal resources.</p>
                </div>
                <motion.div
                    ref={refServices}
                    className='services-list grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-15'
                >
                    <motion.div
                        initial={{ opacity: 0, x: -800 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className='service sm:w-[600px] h-[400px] sm:h-[350px] flex cursor-pointer flex-col-reverse sm:flex-row justify-center items-center sm:items-start rounded-xl'
                    >
                        <div className=''>
                            <h4 className='text-center sm:text-left font-bold'>Business Development</h4>
                            <p className='text-2xl text-justify sm:text-left'>We specialize in assembling and managing teams of highly
                                skilled advisors who augment your in-house resources by
                                providing valuable business models, strategies, and plans
                                across Africa.
                            </p>
                        </div>
                        <i className="fa-solid fa-business-time text-6xl sm:text-8xl"></i>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 1, x: 800 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className='service service-2 sm:w-[600px] h-[400px] sm:h-[350px] flex cursor-pointer flex-col-reverse sm:flex-row justify-center items-center sm:items-start rounded-xl'
                    >
                        <div className=''>
                            <h4 className='text-center sm:text-left font-bold'>Representation Services</h4>
                            <p className='text-2xl text-justify sm:text-left'>We offer professional representation services for
                                companies looking to establish or expand their presence in
                                African markets, ensuring your interests are properly represented.
                            </p>
                        </div>
                        <i className="fa-solid fa-building text-6xl sm:text-8xl"></i>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -800 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 2 }}
                        className='service sm:w-[600px] h-[400px] sm:h-[300px] flex cursor-pointer flex-col-reverse sm:flex-row justify-center items-center sm:items-start rounded-xl'
                    >
                        <div className=''>
                            <h4 className='text-center sm:text-left font-bold'>Corporate Events</h4>
                            <p className='text-2xl text-justify sm:text-left'>Our team specializes in organizing and managing corporate
                                events that help build your brand presence and establish
                                valuable connections in target markets.
                            </p>
                        </div>
                        <i className="fa-solid fa-users text-6xl sm:text-8xl"></i>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 800 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 2 }}
                        className='service service-2 sm:w-[600px] h-[400px] sm:h-[300px] flex cursor-pointer flex-col-reverse sm:flex-row justify-center items-center sm:items-start rounded-xl'
                    >
                        <div className=''>
                            <h4 className='text-center sm:text-left font-bold'>Training Facilitation</h4>
                            <p className='text-2xl text-justify sm:text-left'>We provide specialized training programs designed to
                                enhance the skills and capabilities of your team, preparing
                                them for success in African markets.
                            </p>
                        </div>
                        <i className="fa-solid fa-user-pen text-6xl sm:text-8xl"></i>
                    </motion.div>
                </motion.div>
                <Link to='/services' className='allservice-button flex items-center justify-center rounded-full w-[220px] text-center text-xl'>All Services</Link>
            </motion.div>

            <motion.div
                className="choose-part flex items-center">
                <img src={Why} alt='why' className='hidden sm:flex sm:w-[30%]' />
                <motion.div
                    ref={refWhy}
                    className="choose-container sm:w-[80%]"
                >
                    <h4 className='w-50 text-center rounded-full '>Why Choose Us</h4>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Our Business Development Approach</h2>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 0.5 }}
                        className='reason'
                    >
                        <div className='reason-label flex items-center'>
                            <h1 className='text-4xl lg:text-5xl'>01-</h1>
                            <h5 className='text-2xl lg:text-3xl'>Proposition Development</h5>
                        </div>
                        <p className='text-justify text-lg'>We work with you to create aclearly defined value
                            proposition that resonates with your target market.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1 className='text-4xl lg:text-5xl'>02-</h1>
                            <h5 className='text-2xl lg:text-3xl'>Growth Strategy</h5>
                        </div>
                        <p className='text-justify text-lg'>Our team devises comprehensive growth plans tailored to your specific
                            business objectives and market conditions.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 1.5 }}
                        className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1 className='text-4xl lg:text-5xl'>03-</h1>
                            <h5 className='text-2xl lg:text-3xl'>Profile Building</h5>
                        </div>
                        <p className='text-justify text-lg'>We help build your credibility and visibility in target markets through strategic communications.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 400 }}
                        animate={controls}
                        transition={{ visualDuration: 1, duration: 2 }}
                        className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1 className='text-4xl lg:text-5xl'>04-</h1>
                            <h5 className='text-2xl lg:text-3xl'>Client Acquisition</h5>
                        </div>
                        <p className='text-justify text-lg'>Our experienced business developers deliver your proposition in a compelling way, building rapport and
                            understanding prospect objectives.</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <Stats />

            <motion.div
                ref={refTeam}
                className="team flex flex-col sm:flex-row"
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls1}
                    transition={{ visualDuration: 1, duration: 2 }}
                    className='team-container sm:w-[80%] xl:w-[50%]'
                >
                    <h4 className='w-50 text-center rounded-full'>Expert Team</h4>
                    <h2 className='font-bold text-3xl'>Let's Talk With<br /> Our Consultants</h2>
                    <p className='text-justify text-lg'>We are specialize in transforming businesses and fostering
                        growth through strategic insights and unparalleled expertise.
                    </p>
                    <iframe
                        src={`https://youtube.com/embed/Y34uqCIaHQU?si=ltMDfZmzkL7hsedf`}
                        title="YouTube Video"
                        className='video-youtube w-[100%] sm:w-[100%] h-[200px] sm:h-[60%]'
                        allowFullScreen
                    />
                    <div className='team-button hidden sm:flex w-[180px] rounded-full items-center justify-center'>
                        <Link to='/about' className='text-center'>See All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </motion.div>
                <motion.div className="team-image">
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={controls1}
                        transition={{ visualDuration: 1, duration: 2 }}
                        className='team-info absolute flex flex-col items-center w-50 sm:w-60 rounded-xl'
                    >
                        <h4 className='text-sm sm:text-lg'>Fadimatou Noutchemo</h4>
                        <h5 className='text-sm font-bold'>Senior Consulting</h5>
                        <ul className='team-social flex gap-6'>
                            <li><a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] facebook flex items-center justify-center" aria-label='Facebook'><i className="fa-brands fa-facebook-f text-sm sm:text-lg"></i></a></li>
                            <li><a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] instagram flex items-center justify-center" aria-label='Instagram'><i className="fa-brands fa-instagram text-sm sm:text-lg"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white rounded-full w-[30px] sm:w-[35px] linkedin flex items-center justify-center" aria-label='LinkedIn'><i className="fa-brands fa-linkedin-in text-sm sm:text-lg"></i></a></li>
                        </ul>
                    </motion.div>
                    <motion.img
                        src={Fadi}
                        alt='Fadimatou'
                        className='flex justify-center rounded-xl w-[85%] sm:w-[80%] xl:w-[60%]' />
                </motion.div>
                <div className='team-button flex sm:hidden w-[40%] rounded-full items-center justify-center text-center'>
                    <Link to='/' className=''>See All <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </motion.div>

            <div className="plus-part flex flex-col items-center">
                <h1 className='text-center text-4xl'>Optimize Operations for Maximum Efficiency</h1>
                <p className='text-center text-sm sm:text-xl'>Drive innovation and lead your market segment. Contact us to explore how our consulting can
                    position your business as a front.</p>
                <a className="plus-button rounded-full text-center w-[180px]" href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank'>Get In Touch</a>
            </div>

            <motion.div
                ref={refArticles}
                className="news-part flex flex-col lg:flex-row-reverse"
            >
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={controls2}
                    transition={{ visualDuration: 1, duration: 1 }}
                    className='news-header'
                >
                    <h4 className='w-40 text-center rounded-full'>Last Articles</h4>
                    <h2 className='font-bold text-3xl'>Read Our Recent News & Insights</h2>
                    <p className='text-lg'>Stay connected to our activities, events and the business world in Africa through our news.</p>
                    <div className="news-button hidden lg:flex w-30 text-center rounded-full">
                        <Link to='/news' className='text-lg w-30'>View More</Link>
                    </div>
                </motion.div>
                <div className='news-container flex flex-col sm:flex-row gap-10'>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        animate={controls3}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className="news w-80">
                        <Link to='/news/Unlocking-Your-Company-s-Potential' className=''>
                            <h4 className='absolute rounded-xl text-sm'>Business</h4>
                            <img src={News1} alt="News" className='rounded-lg sm:hover:scale-105 transition-all duration-300' />
                        </Link>
                        <h5 className='text-2xl font-bold'>HefaGroup Unleashes Your Potential</h5>
                        <p className='text-justify text-lg'>At HefaGroup, we believe that every company has unique potential ready to be unlocked.
                            Through our agile and personalized consulting approach, we help you identify your growth drivers, optimize your processes,
                            and innovate sustainably.</p>
                        <Link to='/news/Unlocking-Your-Company-s-Potential' className='button-news text-xl'>Read More...</Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 300 }}
                        animate={controls3}
                        transition={{ visualDuration: 1, duration: 1 }}
                        className="news w-80"
                    >
                        <Link to='/news/SAATM' className=''>
                            <h4 className='absolute rounded-xl text-sm'>Aviation</h4>
                            <img src={News2} alt="News" className='rounded-lg h-[170px] sm:hover:scale-105 transition-all duration-300' />
                        </Link>
                        <h5 className='text-2xl font-bold'>African aviation in the era of free movement: towards a unified sky</h5>
                        <p className='text-justify text-lg'>In 2024, Africa will take a major step forward in regional integration with the gradual implementation of the Single African Air Transport Market (SAATM).
                            This ambitious project aims to liberalize African skies, thus facilitating connectivity between the countries.</p>
                        <Link to='/news/SAATM' className='button-news text-xl'>Read More...</Link>
                    </motion.div>
                </div>
                <div className="news-button flex lg:hidden w-30 text-center rounded-full">
                    <Link to='/news' className=' w-30'>View More</Link>
                </div>
            </motion.div>

            <motion.div
                ref={refFaq}
                className="faq-part flex"
            >
                <div className="faq-container w-[500px] xl:w-[60%]">
                    <h4 className='w-30 text-center rounded-full'>FAQ'S</h4>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Let’s Ask Anything About Business</h2>
                    <p className='text-justify text-lg'>We are specialize in transforming businesses and fostering
                        growth through strategic insights and unparalleled expertise.</p>
                    <div className='faq-list flex flex-col gap-2'>
                        <div className='faq sm:w-[100%] lg:w-[85%]' ref={faqRef1} onClick={handleClickFaq}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={controls4}
                                transition={{ visualDuration: 1, duration: 0.5 }}
                                className='faq-header flex items-center justify-between rounded-xl cursor-pointer'
                            >
                                <h5 className='text-lg sm:text-xl'>How do i know if my business needs consulting<br className='hidden lg:flex' /> services ?</h5>
                                <i className="fa-solid fa-chevron-down text-xl"></i>
                            </motion.div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq1 && (
                                    <motion.p
                                        className='text-justify text-lg'
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                    >
                                        If your business is struggling to overcome challenges or capitalize on opportunities,
                                        consulting services can provide the expertise and support needed to navigate and succeed
                                        in today's competitive landscape.
                                    </motion.p>
                                )}
                            </AnimatePresence>

                        </div>
                        <div className='faq sm:w-[100%] lg:w-[85%]' ref={faqRef2} onClick={handleClickFaq}>
                            <motion.div
                                initial={{ opacity: 0, y: 200 }}
                                animate={controls4}
                                transition={{ visualDuration: 1, duration: 1 }}
                                className='faq-header flex items-center justify-between rounded-xl cursor-pointer'
                            >
                                <h5 className='text-lg sm:text-xl'>How does the counseling process typically work ?</h5>
                                <i className="fa-solid fa-chevron-down text-xl"></i>
                            </motion.div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq2 && (
                                    <motion.p
                                        className='text-justify text-lg'
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                    >
                                        The counseling process generally begins with an initial consultation, where the counselor
                                        and client discuss the client's concerns, goals, and expectations. This is followed by a series
                                        of regular sessions, during which the counselor helps the client explore thoughts, emotions, and behaviors
                                        in a safe and supportive environment.</motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className='faq sm:w-[100%] lg:w-[85%]' ref={faqRef3} onClick={handleClickFaq}>
                            <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                animate={controls4}
                                transition={{ visualDuration: 1, duration: 1.5 }}
                                className='faq-header flex items-center justify-between rounded-xl cursor-pointer'
                            >
                                <h5 className='text-lg sm:text-xl'>What sector of activity do you specialize in ?</h5>
                                <i className="fa-solid fa-chevron-down text-xl"></i>
                            </motion.div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq3 && (
                                    <motion.p
                                        className='text-justify text-lg'
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                    >
                                        We specialize in business consulting, helping companies improve their performance, structure their strategies,
                                        and achieve sustainable growth. Our services cover key areas such as strategic planning, organizational development,
                                        digital transformation, market analysis, and operational efficiency. We work closely with startups, SMEs, and institutions
                                        to unlock their full potential and navigate complex business environments with confidence.</motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={controls5}
                    className="faq-image hidden sm:flex"
                >
                    <img src={Faq} alt='FAQ' className='w-[500px] h-[500px]' />
                </motion.div>
            </motion.div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default home