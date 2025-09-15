import Header from "../components/header"
import AboutImage from '../assets/images/about.webp'
import Logo from '../assets/images/logo.webp'
import Value from '../assets/images/vision1.webp'
import Stats from "../components/stats"
import Footer from "../components/footer"
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const about = () => {

    const [refAbout, inView] = useInView({ threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0
            })
        }
    }, [controls, inView])


    return (
        <div>
            <Header />
            <div className="space">

            </div>
            <motion.div className='banner-page flex flex-col justify-center items-center h-[200px]'>
                <motion.h1  className='text-4xl font-bold'>
                    About Us
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
                    className="line"></motion.div>
            </motion.div>
            <div className="intro-part flex flex-col sm:flex-row sm:items-center gap-6">
                <motion.h2 initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
                    className="text-xl lg:text-3xl sm:border-r-4">HEFA Group : Driving Business Development Across Africa</motion.h2>
                <motion.p initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}>HEFA Group is an innovative business development company led by a team
                    of qualified, dedicated African consultants across diverse domains. We
                    facilitate business growth throughout the continent with strategic thinking,
                    managerial advice, and technical delivery.</motion.p>
            </div>
            <div className="about-part flex flex-col lg:flex-row-reverse items-center gap-6">
                <div className="about-container">
                    <h4 className='w-40 text-center rounded-full'>Who are we ?</h4>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Taking Your Business To<br /> The Next Level With Us</h2>
                    <img src={AboutImage} alt='about' className='about-img sm:hidden w-[100%] sm:w-[60%] h-[20%] lg:w-[40%] xl:w-[35%]' />
                    <p className="text-justify">We are a team of African consultants who support business development
                        in Africa through strategic support and high-level technical execution.</p>
                    <p className="text-justify">Our consultants bring depth and breadth of skills, expertise, experience, and
                        professionalism that organizations can leverage. We maintain rigorous
                        selection procedures to recruit only the best professionals with proven
                        experience and impressive career track records.
                        Supported by a network of professionals and partners working toward
                        shared success, our consultants deliver the highest standards of customer
                        service across Africa.</p>
                </div>
                <img src={AboutImage} alt='about' className='about-img hidden sm:block w-[100%] sm:w-[60%] h-[20%] lg:w-[40%] xl:w-[35%]' />
            </div>
            <div ref={refAbout} className="values-part flex flex-col items-center gap-4 h-[600px] sm:h-[700px] lg:h-[500px]">
                <h1 className="text-4xl text-white">Our Values</h1>
                <div className="line bg-white"></div>
                <p className="description text-justify xl:text-center text-lg text-white">Our core values include performance and results (creating the best possible outcomes for clients), integrity and accountability
                    (acting ethically and taking full responsibility), and professionalism and responsiveness (creating efficient work environments
                    internally and with clients).
                </p>
                <div className="values-container w-[90%] sm:w-[80%] absolute flex flex-col items-center gap-8 lg:flex-row lg:items-center bg-white">
                    <div className="values sm:w-[80%] grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-4">
                        <div className="trust">
                            <h4 className="text-2xl">Trust</h4>
                            <p className="text-sm">We are committed to building trust with our clients and partners through transparency, honesty, and integrity.</p>
                        </div>
                        <div className="responsibility">
                            <h4 className="text-2xl">Responsibility</h4>
                            <p className="text-sm">We believe in the power of collaboration and teamwork to achieve our goals and deliver exceptional results.</p>
                        </div>
                        <div className="global-presence">
                            <h4 className="text-2xl">Global Presence</h4>
                            <p className="text-sm">We are committed to building trust with our clients and partners through transparency, honesty, and integrity.</p>
                        </div>
                        <div className="innovation">
                            <h4 className="text-2xl">Innovation</h4>
                            <p className="text-sm">We are committed to building trust with our clients and partners through transparency, honesty, and integrity.</p>
                        </div>
                    </div>
                    <img src={Value} alt="value" className="hidden sm:block lg:w-[60%] " />
                </div>
            </div>
            <div className="stats-part">
                <Stats />
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

export default about