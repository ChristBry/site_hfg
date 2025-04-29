import '../styles/mainStyle.css'
import Header from '../components/header'
import Logo from '../assets/images/logo.png'
import AboutImage from '../assets/images/about-img.png'
import { Link } from 'react-router-dom'
import Why from '../assets/images/why.png'
import Fadi from '../assets/images/fadi.png'
import News1 from '../assets/images/news1.png'
import Faq from '../assets/images/faq.png'
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
            const animation1 = animate(stats.stats1, 15, { duration: 2 });
            const animation2 = animate(stats.stats2, 50, { duration: 4 });
            const animation3 = animate(stats.stats3, 5, { duration: 1 });
            const animation4 = animate(stats.stats4, 30, { duration: 3 });

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
                    <h1 className='text-2xl font-bold'>Dynamisez Votre<br />Entreprise Avec Nous</h1>
                    <p className='description text-sm'>Bénéficiez d'une croissance inégalée grâce à nos conseils d'experts. Relevez les défis et saisissez les opportunités<br className='hidden sm:flex' />
                        opportunités et regardez votre entreprise prospérer grâce à notre excellence exceptionnelle en matière de conseil.
                    </p>
                    <div className='banner-contact w-[70%] sm:w-[30%] xl:w-[20%] flex items-center justify-center rounded-full'>
                        <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank' className='flex items-center'>Prendre un rendez-vous<i className="fa-brands fa-whatsapp text-3xl"></i></a>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={ref} className="about flex items-center" initial="hidden" animate="visible" variants={variants}>
                <img src={AboutImage} alt='about' className='about-img hidden sm:flex w-[40%] h-[40%] lg:w-[40%] xl:w-[30%]' />
                <div className="about-container">
                    <h4 className='w-60 text-center rounded-full'>Qui Sommes-Nous</h4>
                    <h2 className='font-bold text-2xl sm:text-3xl'>Faites Passer Votre Entreprise<br /> Au Niveau Supérieur</h2>
                    <p>Nous sommes une équipe de consultants africains qui accompagnent le développement des entreprises
                        en Afrique grâce à un accompagnement stratégique et une exécution technique de haut niveau.</p>
                    <div className='about-vision flex items-center'>
                        <i className="fa-solid fa-pen-nib text-5xl"></i>
                        <div>
                            <h3 className='font-bold text-2xl'>Notre Vision</h3>
                            <p className='text-justify'>Notre vision est de permettre aux entreprises africaines de croître durablement en leur
                                fournissant des conseils d'experts, des solutions stratégiques et une exécution à fort
                                impact sur tout le continent.</p>
                        </div>
                    </div>
                    <div className='about-mission flex items-center'>
                        <i className="fa-solid fa-earth-americas text-5xl"></i>
                        <div>
                            <h3 className='font-bold text-2xl'>Notre Mission</h3>
                            <p className='text-justify'>Notre misssion est d'accompagner les entreprises africaines en leur fournissant des conseils
                                stratégiques sur mesure, une expertise et des solutions innovantes à long terme.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className='service-part flex flex-col items-center'>
                <div className='service-description flex flex-col items-center'>
                    <h4 className='rounded-full w-50 text-center'>Nos Services</h4>
                    <h2 className='text-center font-bold'>Découvrez Les Besoins De Votre Entreprise</h2>
                    <p className='text-center'>Nous sommes spécialisés dans la constitution et la gestion d'équipes de conseillers<br className='hidden sm:flex' />
                        hautement qualifiés qui renforcent vos ressources internes.</p>
                </div>
                <div className='services-list grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:gap-6'>
                    <motion.div
                        className='service flex flex-col items-center rounded-xl lg:w-[30%]'

                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-business-time text-4xl"></i>
                        <h4 className='font-bold text-center'>Business Development</h4>
                        <p className='text-center'>Nous sommes spécialisés dans la constitution et
                            la gestion d'équipes de conseillers hautement qualifiés qui renforcent vos ressources internes.
                        </p>
                        <Link to='/' className='service-button'>En savoir-plus...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-building text-4xl"></i>
                        <h4 className='font-bold text-center'>Representation Services</h4>
                        <p className='text-center'>Nous offrons des services de représentation professionnelle aux entreprises souhaitant
                            établir ou étendre leur présence sur les marchés africains.</p>
                        <Link to='/' className='service-button'>En savoir-plus...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-users text-4xl"></i>
                        <h4 className='font-bold text-center'>Corporate Events</h4>
                        <p className='text-center'>Notre équipe est spécialisée dans l’organisation et la gestion d’événements d’entreprise qui
                            contribuent à renforcer la présence de votre marque.</p>
                        <Link to='/' className='service-button'>En savoir-plus...</Link>
                    </motion.div>
                    <motion.div className='service flex flex-col items-center rounded-xl lg:w-[30%]'
                        whileTap={{ scale: 1.1 }}
                    >
                        <i className="fa-solid fa-user-pen text-4xl"></i>
                        <h4 className='font-bold text-center'>Training Facilitation</h4>
                        <p className='text-center'>Nous proposons des programmes de formation spécialisés conçus pour améliorer les compétences
                            et les capacités de votre équipe.</p>
                        <Link to='/' className='service-button'>En savoir-plus...</Link>
                    </motion.div>
                </div>
                <Link to='/' className='allservice-button flex items-center justify-center rounded-full w-[40%] sm:w-[30%] lg:w-[18%] text-center'>Tous Les Services</Link>
            </div>

            <div className="choose-part flex items-center">
                <img src={Why} alt='why' className='hidden sm:flex sm:w-[30%]' />
                <div className="choose-container sm:w-[80%]">
                    <h4 className='w-70 text-center rounded-full '>Pourquoi nous choisir</h4>
                    <h2 className='font-bold text-3xl'>Les Raisons Pour Lesquelles<br className='hidden sm:flex' /> Vous Devez Choisir HefaGroup</h2>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>01</h1>
                            <h5>Valorisation de votre entreprise</h5>
                        </div>
                        <p className='text-justify'>Nous travaillons avec vous pour créer une proposition de valeur clairement définie
                            et adaptée à votre marché cible.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>02</h1>
                            <h5>Stratégie de croissance</h5>
                        </div>
                        <p className='text-justify'>Nous travaillons avec votre équipe pour élaborer des plans de croissance complets, adaptés
                            à vos objectifs commerciaux et aux conditions du marché.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>03</h1>
                            <h5>Création de profil</h5>
                        </div>
                        <p>Nous travaillons avec vous pour créer une proposition de valeur clairement définie
                            et adaptée à votre marché cible.</p>
                    </div>
                    <div className='reason'>
                        <div className='reason-label flex items-center'>
                            <h1>04</h1>
                            <h5>Acquisition de clients</h5>
                        </div>
                        <p>Nos développeurs commerciaux expérimentés présentent votre proposition de manière
                            convaincante, en établissant une relation de confiance et en comprenant les objectifs des prospects.</p>
                    </div>
                </div>
            </div>

            <div ref={ref} className="stats flex justify-center items-center sm:gap-20">
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded1}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Années d'expérience</p>
                </div>
                <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
                    <div className='flex items-center'>
                        <p className='plus'>+</p>
                        <motion.h1 className='text-4xl xl:text-6xl'>{rounded2}</motion.h1>
                    </div>
                    <p className='text-center text-sm sm:text-xl'>Clients Satisfait</p>
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
                    <p className='text-center text-sm sm:text-xl'>Problèmes Résolus</p>
                </div>
            </div>

            <div className="team flex flex-col sm:flex-row">
                <div className='team-container sm:w-[80%] xl:w-[50%]'>
                    <h4 className='w-50 text-center rounded-full'>Notre Equipe</h4>
                    <h2 className='font-bold'>Discutez Avec Nos<br /> Consultants</h2>
                    <p className='text-justify'>Nous sommes spécialisés dans la transformation des entreprises et la stimulation de leur croissance
                        grâce à des analyses stratégiques et une expertise inégalée.
                    </p>
                    <div className='team-button hidden sm:flex w-[30%] rounded-full items-center justify-center'>
                        <Link to='/' className='text-center'>Voir plus <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="team-image">
                    <img src={Fadi} alt='Fadimatou' className='flex justify-center w-[80%] sm:w-[60%]' />
                    <div className='team-info flex flex-col items-center w-60 rounded-xl'>
                        <h4>Fadimatou Noutchemo</h4>
                        <h5 className='font-bold'>Senior Consulting</h5>
                        <ul className='team-social flex gap-6'>
                            <li><a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white rounded-full w-[40px] facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a></li>
                            <li><a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white rounded-full w-[40px] instagram"><i className="fa-brands fa-instagram text-xl"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white rounded-full w-[40px] linkedin"><i className="fa-brands fa-linkedin-in text-xl"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='team-button flex sm:hidden w-[40%] rounded-full items-center justify-center text-center'>
                    <Link to='/' className=''>Voir plus <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

            <div className="plus-part flex flex-col items-center">
                <h1 className='text-center text-4xl'>Optimiser Vos Opérations Pour Une Efficacité Maximale</h1>
                <p className='text-center text-sm sm:text-xl'>Stimulez l'innovation et dominez votre segment de marché. Contactez-nous pour découvrir comment nos services de conseil
                    peuvent positionner votre entreprise comme leader.</p>
                <div className="plus-button rounded-full text-center xl:w-[20%] sm:w-[30%]">
                    <Link to='/'>Entrez en Contact</Link>
                </div>
            </div>

            <div className="news-part flex flex-col lg:flex-row-reverse">
                <div className='news-header'>
                    <h4 className='w-40 text-center rounded-full'>Actualités</h4>
                    <h2 className='font-bold text-3xl'>Consultez Nos Dernières Actualités<br /> Et Analyses</h2>
                    <p>Restez connecté à nos activités, événements et au monde
                        des affaires en Afrique grâce à nos actualités.</p>
                    <div className="news-button hidden sm:flex w-30 text-center rounded-full">
                        <Link to='/' className=' w-30'>Voir Plus</Link>
                    </div>
                </div>
                <div className='news-container flex flex-col items-center gap-6 lg:flex-row gap-10'>
                    <div className="news w-80">
                        <Link to='/' className=''>
                            <h4 className='absolute rounded-xl'>Finance</h4>
                            <h5 className='absolute'>HefaGroup Libère Votre Potentiel</h5>
                            <img src={News1} alt="News" className='rounded-lg' />
                        </Link>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu augue a quam<br />
                            cursus A non imperdiet nisl. Donec  ullamcorper fermentum sem.</p>
                        <Link to='/' className='button-news'>Lire Plus...</Link>
                    </div>
                    <div className="news w-80">
                        <Link to='/' className=''>
                            <h4 className='absolute rounded-xl'>Finance</h4>
                            <h5 className='absolute'>HefaGroup Libère Votre Potentiel</h5>
                            <img src={News1} alt="News" className='rounded-lg' />
                        </Link>
                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu augue a quam<br />
                            cursus A non imperdiet nisl. Donec  ullamcorper fermentum sem.</p>
                        <Link to='/' className='button-news'>Lire Plus...</Link>
                    </div>
                </div>
                <div className="news-button flex sm:hidden w-30 text-center rounded-full">
                    <Link to='/' className=' w-30'>Voir Plus</Link>
                </div>
            </div>

            <div className="faq-part flex">
                <div className="faq-container xl:w-[90%]">
                    <h4 className='w-30 text-center rounded-full'>FAQ'S</h4>
                    <h2 className='font-bold text-2xl lg:text-3xl'>Posez toutes vos questions<br className='hidden sm:flex' /> sur les affaires</h2>
                    <p className='text-justify'>Nous sommes spécialisés dans la transformation des entreprises et la stimulation de leur croissance
                        grâce à des analyses stratégiques et une expertise inégalée.</p>
                    <div className='faq-list flex flex-col gap-2'>
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef1} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer'>
                                <h5>Comment savoir si mon entreprise a besoin de services de conseil ?</h5>
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
                                        Si votre entreprise a du mal à surmonter certains défis ou à capitaliser sur les opportunités,
                                        les services de conseil peuvent fournir l'expertise et le soutien nécessaires pour naviguer et réussir
                                        dans le paysage concurrentiel d'aujourd'hui.</motion.p>
                                )}
                            </AnimatePresence>

                        </div>
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef2} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer' onClick={handleClickFaq}>
                                <h5>Comment fonctionne généralement le processus de conseil ?</h5>
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
                                        Si votre entreprise a du mal à surmonter certains défis ou à capitaliser sur les opportunités,
                                        les services de conseil peuvent fournir l'expertise et le soutien nécessaires pour naviguer et réussir
                                        dans le paysage concurrentiel d'aujourd'hui.</motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className='faq sm:w-[100%] lg:w-[80%]' ref={faqRef3} onClick={handleClickFaq}>
                            <div className='faq-header flex items-center justify-between rounded-xl cursor-pointer' onClick={handleClickFaq}>
                                <h5>Dans quel secteur d'activité êtes-vous spécialisé ?</h5>
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
                                        Si votre entreprise a du mal à surmonter certains défis ou à capitaliser sur les opportunités,
                                        les services de conseil peuvent fournir l'expertise et le soutien nécessaires pour naviguer et réussir
                                        dans le paysage concurrentiel d'aujourd'hui.</motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
                <div className="faq-image hidden lg:flex">
                    <img src={Faq} alt='FAQ' className='' />
                </div>
            </div>
            <div className='newsletter justify-center items-center flex flex-col'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <p className='text-center'>Inscrivez-vous à notre newsletter pour être informé de nos dernières nouvelles et mises à jour.</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="text" placeholder='name@mail.com' className='w-[50%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button className='w-[40%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 mt-5 cursor-pointer'>S'inscrire</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home