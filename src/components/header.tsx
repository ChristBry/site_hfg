import { Link, useLocation } from "react-router-dom"
import logo from "../assets/images/logo.webp"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion'

const header = () => {
    const [open, setOpen] = useState(false)
    const navBar = useRef<HTMLUListElement>(null)
    const location = useLocation();
    const menuItems = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/news', label: 'News' },
        { to: '/contact', label: 'Contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const headerContainer = document.querySelector('.infos-header-container');
            if (!headerContainer) return;
            const scrollPosition = window.scrollY;
            headerContainer.classList.toggle('scrolled', scrollPosition > 0);
            setOpen(false)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div className="header fixed z-20">
            <motion.div className='infos-header-container flex justify-between items-center p-4'>
                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="infos-header-title w-[100%] sm:flex sm:gap-2 xl:gap-10"
                >
                    <p className="w-[200px]"><i className="fa-solid fa-envelope"></i>contact@hefagroups.com</p>
                    <p className="w-[180px]"><i className="fa-solid fa-phone"></i>(237) 670-897-408</p>
                    <p className="w-[180px]"><i className="fa-solid fa-location-dot"></i>Douala, Cameroon</p>
                </motion.div>
                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="infos-header-social w-[30%] h-[40px] flex justify-end"
                >
                    <a href="https://www.facebook.com/hefagroupsarl" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/hefagroups" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] instagram" aria-label="Instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/company/hefagroup-partners" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] linkedin" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                </motion.div>
            </motion.div>
            <motion.div
                className="nav shadow-lg"
            >
                <div className="flex items-center justify-between">
                    <div className="logo w-[40%] sm:w-[20%]">
                        <Link to='/'><img src={logo} alt="logo" className="mx-auto" /></Link>
                    </div>
                    <div className="nav-bar flex lg:hidden" onClick={() => setOpen(!open)}>
                        <i className="fa-solid fa-bars text-3xl"></i>
                    </div>
                    <ul className="nav-list hidden lg:flex sm:w-[100%] flex justify-center sm:gap-3 xl:gap-8" ref={navBar}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={`text-xl ${location.pathname === item.to || (item.to === '/news' && location.pathname.startsWith('/news/')) ? 'active' : ''}`}>
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='header-action hidden w-[70%] sm:w-[35%] xl:w-[20%] lg:flex items-center justify-center rounded-full'>
                        <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Contact Us<i className="fa-solid fa-arrow-up-right-from-square text-lg"></i></a>
                    </div>
                </div>
                {open &&
                    <div className="nav-mobile">
                        <ul className="w-[50%] flex flex-col gap-2">
                            {menuItems.map((item, index) => (
                                <li key={index} className={`text-xl ${location.pathname === item.to || (item.to === '/news' && location.pathname.startsWith('/news/')) ? 'active' : ''}`}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </motion.div>

        </motion.div>
    )
}

export default header