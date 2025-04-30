import '../styles/mainStyle.css'
import Header from '../components/header'
import Logo from '../assets/images/logo.webp'
import AboutImage from '../assets/images/vision1.png'
import { Link } from 'react-router-dom'
import Why from '../assets/images/why.webp'
import Fadi from '../assets/images/fadi.webp'
import News1 from '../assets/images/news1.webp'
import Faq from '../assets/images/faq.webp'
import Footer from '../components/footer'
import { useEffect, useRef, useState } from 'react'
import { animate, AnimatePresence, easeOut, motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const home = () => {
    const [ref, inView] = useInView({
        threshold: 0.9,
    })
    const [isOpenFaq1, setIsOpenFaq1] = useState(false)
    const [isOpenFaq2, setIsOpenFaq2] = useState(false)
    const [isOpenFaq3, setIsOpenFaq3] = useState(false)
    const faqRef1 = useRef<HTMLDivElement>(null)
    const faqRef2 = useRef<HTMLDivElement>(null)
    const faqRef3 = useRef<HTMLDivElement>(null)
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

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: inView ? 0 : 1,
            y: inView ? 100 : 0,
            transition: {
                duration: 1,
                ease: easeOut,
            }
        }
    }

    const stats = {
        stats1: useMotionValue(0),
        stats2: useMotionValue(0),
        stats3: useMotionValue(0),
        stats4: useMotionValue(0),
    };

    const rounded1 = useTransform(stats.stats1, (value) => Math.round(value))
    const rounded2 = useTransform(stats.stats2, (value) => Math.round(value))
    const rounded3 = useTransform(stats.stats3, (value) => Math.round(value))
    const rounded4 = useTransform(stats.stats4, (value) => Math.round(value))

    useEffect(() => {
        if (inView) {
            const animation1 = animate(stats.stats1, 15, { duration: 1 });
            const animation2 = animate(stats.stats2, 50, { duration: 1 });
            const animation3 = animate(stats.stats3, 5, { duration: 1 });
            const animation4 = animate(stats.stats4, 30, { duration: 1 });

            return () => {
                animation1.stop();
                animation2.stop();
                animation3.stop();
                animation4.stop();
            };
        }
    }, [inView])

    return (
        <div className='home'>
            <motion.div ref={ref} initial="hidden" animate="visible" variants={variants}>
                <Header />
                <div className="space">

                </div>
                <div className='banner'>
                    <p className='business w-[50%] sm:w-[30%] xl:w-[20%] text-center rounded-full'>Business Consulting</p>
                    <h1 className='text-3xl font-bold'>Empowering Your<br />Business With Us</h1>
                    <p className='description text-sm'>Experience unparallaled growth with our expert guidance. Navigate challenges, seize opportunities, and<br className='hidden sm:flex' />
                        watch your business flourish under our exceptional consulting excellence.
                    </p>
                    <div className='banner-contact w-[250px] flex items-center justify-center rounded-full'>
                        <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Make an appointment<i className="fa-brands fa-whatsapp text-3xl"></i></a>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={ref} className="about flex flex-col lg:flex-row-reverse items-center" initial="hidden" animate="visible" variants={variants}>
                <div className="about-container">
                    <h4 className='w-40 text-center rounded-full'>About Us</h4>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Taking Your Business To<br /> The Next Level</h2>
                    <p>We are a team of African consultants who support business development
                        in Africa through strategic support and high-level technical execution.</p>
                    <h2 className='text-2xl sm:text-2xl'>Our Vision and Values</h2>

                    <p className='text-justify'>People join HEFA Group because they share our vision of making a real and lasting impact on Africa's development. They believe in
                        our values and ethics, and above all, they want to make a difference.
                        Our core values include performance and results (creating the best possible outcomes for clients), integrity and accountability
                        (acting ethically and taking full responsibility), and professionalism and responsiveness (creating efficient work environments
                        internally and with clients).
                    </p>
                </div>
                <img src={AboutImage} alt='about' className='about-img sm:w-[60%] h-[80%] lg:w-[40%] xl:w-[50%]' />
            </motion.div>

            <div className='service-part flex flex-col items-center'>
                <div className='service-description flex flex-col items-center'>
                    <h4 className='rounded-full w-50 text-center'>Our Services</h4>
                    <h2 className='text-center font-bold'>Discover Your Business Needs</h2>
                    <p className='text-center'>We are specialize in building and managing teams of highly qualified advisors who strengthen your internal resources.</p>
                </div>
                <div className='services-list grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:gap-6'>
                    <motion.div
                        className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-business-time text-4xl"></i>
                        <h4 className='font-bold text-center'>Business Development</h4>
                        <p className='text-justify'>We specialize in assembling and managing teams of highly
                            skilled advisors who augment your in-house resources by
                            providing valuable business models, strategies, and plans
                            across Africa.</p>
                        <Link to='/' className='service-button'>Learn more...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-building text-4xl"></i>
                        <h4 className='font-bold text-center'>Representation Services</h4>
                        <p className='text-justify'>We offer professional representation services for
                            companies looking to establish or expand their presence in
                            African markets, ensuring your interests are properly represented.
                        </p>
                        <Link to='/' className='service-button'>Learn more...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-users text-4xl"></i>
                        <h4 className='font-bold text-center'>Corporate Events</h4>
                        <p className='text-justify'>Our team specializes in organizing and managing corporate
                            events that help build your brand presence and establish
                            valuable connections in target markets.</p>
                        <Link to='/' className='service-button'>Learn more...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-user-pen text-4xl"></i>
                        <h4 className='font-bold text-center'>Training Facilitation</h4>
                        <p className='text-justify'>We provide specialized training programs designed to
                            enhance the skills and capabilities of your team, preparing
                            them for success in African markets.</p>
                        <Link to='/' className='service-button'>Learn more...</Link>
                    </motion.div>
                </div>
                <Link to='/' className='allservice-button flex items-center justify-center rounded-full w-[180px] text-center'>All Services</Link>
            </div>

            <div className="choose-part flex items-center">
                <img src={Why} alt='why' className='hidden sm:flex sm:w-[30%]' />
                <div className="choose-container sm:w-[80%]">
                    <h4 className='w-50 text-center rounded-full '>Why Choose Us</h4>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Our Business Development Approach</h2>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>01-</h1>
                            <h5>Proposition Development</h5>
                        </div>
                        <p className='text-justify'>We work with you to create aclearly defined value
                            proposition that resonates with your target market.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>02-</h1>
                            <h5>Growth Strategy</h5>
                        </div>
                        <p className='text-justify'>Our team devises comprehensive growth plans tailored to your specific
                            business objectives and market conditions.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>03-</h1>
                            <h5>Profile Building</h5>
                        </div>
                        <p>We help build your credibility and visibility in target markets through strategic communications.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>04-</h1>
                            <h5>Client Acquisition</h5>
                        </div>
                        <p>Our experienced business developers deliver your proposition in a compelling way, building rapport and
                            understanding prospect objectives.</p>
                    </div>
                </div>
            </div>

            <div ref={ref} className="stats flex justify-center items-center sm:gap-20">
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded1}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Years of experience</p>
                </div>
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded2}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Satisfied Customers</p>
                </div>
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded3}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Expert Consultant</p>
                </div>
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded4}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Problems Solved</p>
                </div>
            </div>

            <div className="team flex flex-col sm:flex-row">
                <div className='team-container sm:w-[80%] xl:w-[50%]'>
                    <h4 className='w-50 text-center rounded-full'>Expert Team</h4>
                    <h2 className='font-bold text-3xl'>Let’s Talk With<br /> Our Consultants</h2>
                    <p className='text-justify'>We are specialize in transforming businesses and fostering
                        growth through strategic insights and unparalleled expertise.
                    </p>
                    <div className='team-button hidden sm:flex w-[180px] rounded-full items-center justify-center'>
                        <Link to='/' className='text-center'>See All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="team-image">
                    <div className='team-info absolute flex flex-col items-center w-60 rounded-xl'>
                        <h4>Fadimatou Noutchemo</h4>
                        <h5 className='font-bold'>Senior Consulting</h5>
                        <ul className='team-social flex gap-6'>
                            <li><a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white rounded-full w-[35px] facebook flex items-center justify-center" aria-label='Facebook'><i className="fa-brands fa-facebook-f text-xl"></i></a></li>
                            <li><a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white rounded-full w-[40px] instagram flex items-center justify-center" aria-label='Instagram'><i className="fa-brands fa-instagram text-xl"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white rounded-full w-[40px] linkedin flex items-center justify-center" aria-label='LinkedIn'><i className="fa-brands fa-linkedin-in text-xl"></i></a></li>
                        </ul>
                    </div>
                    <img src={Fadi} alt='Fadimatou' className='flex justify-center w-[85%] sm:w-[80%] xl:w-[60%]' />
                </div>
                <div className='team-button flex sm:hidden w-[40%] rounded-full items-center justify-center text-center'>
                    <Link to='/' className=''>See All <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

            <div className="plus-part flex flex-col items-center">
                <h1 className='text-center text-4xl'>Optimize Operations for Maximum Efficiency</h1>
                <p className='text-center text-sm sm:text-xl'>Drive innovation and lead your market segment. Contact us to explore how our consulting can
                    position your business as a front.</p>
                <div className="plus-button rounded-full text-center w-[180px]">
                    <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank'>Get In Touch</a>
                </div>
            </div>

            <div className="news-part flex flex-col lg:flex-row-reverse">
                <div className='news-header'>
                    <h4 className='w-40 text-center rounded-full'>Last Articles</h4>
                    <h2 className='font-bold text-3xl'>Read Our Recent News & Insights</h2>
                    <p>Stay connected to our activities, events and the business world in Africa through our news.</p>
                    <div className="news-button hidden lg:flex w-30 text-center rounded-full">
                        <Link to='/' className=' w-30'>View More</Link>
                    </div>
                </div>
                <div className='news-container flex flex-col items-center sm:flex-row gap-10'>
                    <div className="news w-80">
                        <Link to='/' className=''>
                            <h4 className='absolute rounded-xl'>Business</h4>
                            <h5 className='absolute news-title1 absolute'>HefaGroup Unleashes Your Potential</h5>
                            <img src={News1} alt="News" className='rounded-lg' />
                        </Link>
                        <p className='text-justify'>At HefaGroup, we believe that every company has unique potential ready to be unlocked.
                            Through our agile and personalized consulting approach, we help you identify your growth drivers, optimize your processes,
                            and innovate sustainably.</p>
                        <Link to='/' className='button-news'>Read More...</Link>
                    </div>
                    <div className="news w-80">
                        <Link to='/' className=''>
                            <h4 className='absolute rounded-xl'>Aviation</h4>
                            <h5 className='absolute news-title2 absolute w-70'>African aviation in the era of free movement: towards a unified sky</h5>
                            <img src={News1} alt="News" className='rounded-lg' />
                        </Link>
                        <p className='text-justify'>In 2024, Africa will take a major step forward in regional integration with the gradual implementation of the Single African Air Transport Market (SAATM).
                            This ambitious project aims to liberalize African skies, thus facilitating connectivity between the countries.</p>
                        <Link to='/' className='button-news'>Read More...</Link>
                    </div>
                </div>
                <div className="news-button flex lg:hidden w-30 text-center rounded-full">
                    <Link to='/' className=' w-30'>View More</Link>
                </div>
            </div>

            <div className="faq-part flex">
                <div className="faq-container w-[500px] xl:w-[60%]">
                    <h4 className='w-30 text-center rounded-full'>FAQ'S</h4>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Let’s Ask Anything About Business</h2>
                    <p className='text-justify'>We are specialize in transforming businesses and fostering
                        growth through strategic insights and unparalleled expertise.</p>
                    <div className='faq-list flex flex-col gap-2'>
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef1} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer'>
                                <h5>How do i know if my business needs consulting<br className='hidden lg:flex' /> services ?</h5>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq1 && (
                                    <motion.p
                                        className='text-justify'
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
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef2} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer' onClick={handleClickFaq}>
                                <h5>How does the counseling process typically work ?</h5>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq2 && (
                                    <motion.p
                                        className='text-justify'
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                    >
                                        The counseling process generally begins with an initial consultation, where the counselor
                                        and client discuss the client’s concerns, goals, and expectations. This is followed by a series
                                        of regular sessions, during which the counselor helps the client explore thoughts, emotions, and behaviors
                                        in a safe and supportive environment.</motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef3} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer' onClick={handleClickFaq}>
                                <h5>What sector of activity do you specialize in ?</h5>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <AnimatePresence initial={false}>
                                {isOpenFaq3 && (
                                    <motion.p
                                        className='text-justify'
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
                <div className="faq-image hidden sm:flex">
                    <img src={Faq} alt='FAQ' className='w-[500px] h-[500px]' />
                </div>
            </div>
            <div className='newsletter justify-center items-center flex flex-col'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <p className='text-center'>Subscribe to our newsletter to be informed of our latest news and updates.</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="text" placeholder='name@mail.com' className='w-[60%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button className='w-[25%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 mt-5 cursor-pointer'>Subscribe</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home