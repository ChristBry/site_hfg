import '../styles/mainStyle.css'
import Header from '../components/header'
import Logo from '../assets/images/logo.png'
import {easeOut, motion } from 'framer-motion'


const landingpage = () => {

    const variants = {
        hidden : { opacity : 0, y: 100},
        visible : {
            opacity : 1,
            y: 0,
            transition: {
                duration: 1,
                ease: easeOut,
            }
        }
        
    }
    return (
        <motion.div initial="hidden" animate="visible" variants={variants}>
            <Header />
            <div className='banner'>
                <p className='business w-[50%] sm:w-[20%] text-center rounded-full'>Business Consulting</p>
                <h1 className='text-2xl'>Dynamisez Votre<br />Entreprise Avec Nous</h1>
                <p className='description text-sm'>Bénéficiez d'une croissance inégalée grâce à nos conseils d'experts. Relevez les défis et saisissez les opportunités<br />
                    opportunités et regardez votre entreprise prospérer grâce à notre excellence exceptionnelle en matière de conseil.
                </p>
                <div className='banner-contact w-[70%] sm:w-[25%] flex items-center justify-center rounded-full'>
                    <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Prendre un rendez-vous<i className="fa-brands fa-whatsapp text-3xl"></i></a>
                </div>
            </div>
            <div className='newsletter justify-center items-center flex flex-col h-[38vh]'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <h3 className='typing'>Site en construction...</h3>
                
            </div>

        </motion.div>
    )
}

export default landingpage