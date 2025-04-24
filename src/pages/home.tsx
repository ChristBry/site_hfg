import '../styles/mainStyle.css'
import Header from '../components/header'
import Logo from '../assets/images/logo.png'

const home = () => {
    return (
        <div>
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
            <div className='newsletter justify-center items-center flex flex-col'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <h3>Site En Construction...</h3>
                <p className='text-center'>Inscrivez-vous à notre newsletter pour être informé de nos dernières nouvelles et mises à jour.</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="text" placeholder='name@mail.com' className='w-[50%] sm:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button className='w-[40%] sm:w-[12%] h-[55px] rounded-e-full border-2 mt-5 cursor-pointer'>Me tenir informé</button>
                </div>
            </div>

        </div>
    )
}

export default home