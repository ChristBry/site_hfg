import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <div className='footer'>
            <div className='lg:flex items-center lg:flex justify-around footer-container'>
                <div className="links hidden lg:flex flex-col gap-4">
                    <h3>Liens rapides</h3>
                    <div className='flex flex-col gap-4'>
                        <Link to='/' className='links'>Acceuil</Link>
                        <Link to='/' className='links'>Qui Sommes-Nous</Link>
                        <Link to='/' className='links'>Actualités</Link>
                        <Link to='/' className='links'>Contact</Link>
                        <Link to='/' className='links'>FAQ'S</Link>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col gap-4">
                    <h3>Services</h3>
                    <Link to='/' className='links'>Business Development</Link>
                    <Link to='/' className='links'>Representation Services</Link>
                    <Link to='/' className='links'>Corporate Events</Link>
                    <Link to='/' className='links'>Training Facilitation</Link>
                </div>
                <div className="contact-footer">
                    <h3>Contactez-Nous</h3>
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
            <div className="copyright lg:flex-row-inverse items-center justify-between border-t-2 border-t-white">
                <div className='footer-social flex gap-4'>
                    <a href="https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] whatsapp"><i className="fa-brands fa-whatsapp text-xl"></i></a>
                    <a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                    <a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                    <a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white flex justify-center items-center rounded-full w-[40px] linkedin"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
                </div>
                <p>Copyright © 2025 HefaGroup. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default footer