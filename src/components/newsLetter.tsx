import Logo from '../assets/images/logo.webp'

const newsLetter = () => {
    return (
        <div className='newsletter justify-center items-center flex flex-col'>
            <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
            <p className='text-center'>Subscribe to our newsletter to be informed of our latest news and updates.</p>
            <div className='newsletter-input flex items-center justify-center w-[100%]'>
                <input type="text" placeholder='name@mail.com' className='w-[60%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                <button className='w-[25%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 mt-5 cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}

export default newsLetter