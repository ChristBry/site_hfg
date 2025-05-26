import { useInView } from 'react-intersection-observer'
import Logo from '../assets/images/logo.webp'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const newsLetter = () => {
    const [ref, inView] = useInView({ threshold: 0.3 })
    const controls = useAnimation()
    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0
            })
        }
    }, [inView, controls])

    return (
        <motion.div ref={ref} className='newsletter'>
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={controls}
                transition={{ visualDuration: 1, duration: 1 }}
                className='justify-center items-center flex flex-col'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <p className='text-center'>Subscribe to our newsletter to be informed of our latest news and updates.</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="text" placeholder='name@mail.com' className='w-[60%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button className='w-[25%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 mt-5 cursor-pointer'>Subscribe</button>
                </div>
            </motion.div>
        </motion.div>

    )
}

export default newsLetter