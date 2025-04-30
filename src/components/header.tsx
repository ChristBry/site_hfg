import { Link } from "react-router-dom"
import logo from "../assets/images/logo.webp"
import { useEffect, useState } from "react"

const header = () => {
    const [open, setOpen] = useState(false)
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
        <div className="header fixed z-20">
            <div className='infos-header-container flex justify-between items-center p-4'>
                <div className="infos-header-title w-[100%] sm:flex sm:gap-2 xl:gap-10">
                    <p className="w-[200px]"><i className="fa-solid fa-envelope"></i>contact@hefagroups.com</p>
                    <p className="w-[180px]"><i className="fa-solid fa-phone"></i>(237) 670-897-408</p>
                    <p className="w-[180px]"><i className="fa-solid fa-location-dot"></i>Douala, Cameroon</p>
                </div>
                <div className="infos-header-social w-[30%] h-[40px] flex justify-end">
                    <a href="https://www.facebook.com/hefagroupsarl" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] facebook" aria-label="Facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] instagram" aria-label="Instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] linkedin" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                </div>
            </div>
            <div className="nav shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="logo w-[40%] sm:w-[20%]">
                        <Link to='/'><img src={logo} alt="logo" className="mx-auto" /></Link>
                    </div>
                    <div className="nav-bar flex lg:hidden" onClick={() => setOpen(!open)}>
                        <i className="fa-solid fa-bars text-3xl"></i>
                    </div>
                    <ul className="nav-list hidden lg:flex sm:w-[100%] flex justify-center sm:gap-3 xl:gap-8">
                        <li className="text-xl"><Link to='/'>Home</Link></li>
                        <li className="text-xl"><Link to='/about'>About Us</Link></li>
                        <li className="text-xl"><Link to='/services'>Services</Link></li>
                        <li className="text-xl"><Link to='/about'>News</Link></li>
                        <li className="text-xl"><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className='header-action hidden w-[70%] sm:w-[35%] xl:w-[20%] lg:flex items-center justify-center rounded-full'>
                        <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Contact Us<i className="fa-solid fa-arrow-up-right-from-square text-lg"></i></a>
                    </div>
                </div>
                {open && 
                    <div className="nav-mobile">
                    <ul className="w-[50%] flex flex-col gap-2">
                        <li className="text-xl"><Link to='/'>Home</Link></li>
                        <li className="text-xl"><Link to='/about'>About Us</Link></li>
                        <li className="text-xl"><Link to='/services'>Services</Link></li>
                        <li className="text-xl"><Link to='/about'>News</Link></li>
                        <li className="text-xl"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                }
            </div>

        </div>
    )
}

export default header