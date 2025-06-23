import { Link } from 'react-router-dom'

const footer = () => {

    return (
        <div className='footer'>
            <div className='sm:flex justify-around footer-container'>
                <div className="links hidden sm:flex flex-col gap-4">
                    <h3 className='text-3xl'>Quick Links</h3>
                    <div className='flex flex-col gap-4'>
                        <Link to='/' className='links text-xl'>Home</Link>
                        <Link to='/' className='links text-xl'>About Us</Link>
                        <Link to='/' className='links text-xl'>News</Link>
                        <Link to='/' className='links text-xl'>Contact</Link>
                        <Link to='/' className='links text-xl'>FAQ'S</Link>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col gap-4">
                    <h3 className='text-3xl'>Services</h3>
                    <Link to='/' className='links text-xl'>Business Development</Link>
                    <Link to='/' className='links text-xl'>Representation Services</Link>
                    <Link to='/' className='links text-xl'>Corporate Events</Link>
                    <Link to='/' className='links text-xl'>Training Facilitation</Link>
                </div>
                <div className="contact-footer">
                    <h3 className='text-3xl'>Contact Us</h3>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-phone text-2xl"></i>
                        <div>
                            <h5>Phone</h5>
                            <p>(237) 670-897-408</p>
                        </div>
                    </div>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-2xl"></i>
                        <div>
                            <h5>Location</h5>
                            <p>Douala, Cameroun</p>
                        </div>
                    </div>
                    <div className="phone flex items-center gap-2">
                        <i className="fa-solid fa-envelope text-2xl"></i>
                        <div>
                            <h5>Email</h5>
                            <p>contact@hefagroups.com</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyright sm:flex-row-reverse sm:flex items-center justify-between border-t-2 border-t-white">
                <div className='footer-social flex gap-4'>
                    <a href="https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] whatsapp" aria-label='Whatsapp'><i className="fa-brands fa-whatsapp text-xl"></i></a>
                    <a href="https://www.facebook.com/hefagroupsarl" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] facebook" aria-label='Facebook'><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/hefagroups" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] instagram" aria-label='Instagram'><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/company/hefagroup-partners" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] linkedin" aria-label='LinkedIn'><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                </div>
                <p>Copyright © 2025 HefaGroup. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default footer