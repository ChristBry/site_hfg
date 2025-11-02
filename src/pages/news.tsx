import { Link } from "react-router-dom"
import Header from "../components/header"
import News1 from '../assets/images/news2.webp'
import News2 from '../assets/images/news1.webp'
import News3 from '../assets/images/iata.webp'
import News4 from '../assets/images/saatm.webp'
import News5 from '../assets/images/fadi_amadeus.webp'
import NewsLetter from "../components/newsLetter"
import Footer from "../components/footer"
import { motion } from 'framer-motion'

const news = () => {
  return (
    <div>
      <Header />
      <div className="space">

      </div>
      <div className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'>
        <h1 className='text-[35px] font-bold'>News</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
          className="line" />
      </div>
      <div className="blog-part flex flex-col lg:flex-row-reverse gap-10 lg:gap-4">
        {/*
        <div className="hidden tags-part flex flex-col gap-2 w-10">
          <div className="tags-header ">
            <h1 className='text-4xl font-bold'>Tags</h1>
            <div className="line"></div>
          </div>
          <div className="tags-container grid grid-cols-4 sm:flex-nowrap lg:flex-wrap gap-4">
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-20">Aviation</span>
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-20">Business</span>
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-25">Consulting</span>
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-20">Financial</span>
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-25">Marketing</span>
            <span className="tag-card flex justify-center border rounded-lg text-sm font-bold w-25">Startup</span>
          </div>
        </div>
        */}
        <div className="blog-container flex flex-col items-center gap-10 lg:gap-10 w-[100%]">
          <div className="blog-container flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
            <div className="news-card w-[100%] lg:w-[40%]">
              <Link to='/news/medays-amadeus' className=''>
                <h3 className='absolute rounded-xl'>Business</h3>
                <h4 className='absolute news-title1 rounded-xl absolute'>Nov 02, 2025</h4>
                <img src={News5} alt="News" className='rounded-lg w-[90%] h-[230px] sm:h-[370px]' />
              </Link>
              <h5 className='text-2xl font-bold'>MEDAYS INVESTMENTS SUMMIT – PANEL 6 — Invest in Tourism & Hospitality: Catalyst for Economic Growth</h5>
              <p className='text-justify text-gray-700'>At the heart of the MEDays2025 discussions, our consultant, Ms. Fadimatou Noutchemo,
                will lead a panel discussion on how tourism and hospitality can be key drivers of sustainable economic development
                and cross-border investment opportunities. With the participation of H.E. Dr. Joseph Muscat, former Prime Minister
                of the Republic of Malta.
              </p>
              <Link to='/news/medays-amadeus' className='button-news text-lg'>Read More...</Link>
            </div>
            <div className="news-card w-[100%] lg:w-[40%]">
              <Link to='/news/Industry-Recognition-and-Awards' className=''>
                <h3 className='absolute rounded-xl'>Aviation</h3>
                <h4 className='absolute news-title1 rounded-xl absolute'>June 20, 2025</h4>
                <img src={News3} alt="News" className='rounded-lg w-[100%] h-[230px] sm:h-[360px]' />
              </Link>
              <h5 className='text-2xl font-bold'>Industry Recognition: IATA and Commonwealth</h5>
              <p className='text-justify text-gray-700'>At YAAPA (Young African Aviation Professionals Association), we believe in hard work, dedication, and a relentless
                pursuit of excellence in shaping the future of aviation in Africa. That’s why we are both honored and humbled to
                share some major milestones that reflect not only our commitment, but the trust and recognition we’ve earned from
                global and regional institutions.
              </p>
              <Link to='/news/Industry-Recognition-and-Awards' className='button-news text-lg'>Read More...</Link>
            </div>
          </div>
          <div className="blog-container flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
            <div className="news-card w-[100%] lg:w-[40%]">
              <Link to='/news/SAATM' className=''>
                <h3 className='absolute rounded-xl'>Business</h3>
                <h4 className='absolute news-title1 rounded-xl absolute'>June 15, 2025</h4>
                <img src={News4} alt="News" className='rounded-lg w-[100%] h-[230px] sm:h-[360px]' />
              </Link>
              <h5 className='text-2xl font-bold'>African aviation in the era of free movement: towards a unified sky</h5>
              <p className='text-justify text-gray-700'>As global mobility becomes a cornerstone of economic growth, Africa is boldly embracing the future with one of its most
                ambitious initiatives yet: the Single African Air Transport Market (SAATM). Launched under the African Union's Agenda 2063, 2024 marks a turning point in regional
                integration with the gradual rollout of SAATM—a bold vision for a unified, liberalized airspace across the continent.
              </p>
              <Link to='/news' className='button-news text-lg'>Read More...</Link>
            </div>
            <div className="news-card w-[100%] lg:w-[40%]">
              <Link to='/news/Aviation-Expertise-A-Key-to-Success' className=''>
                <h3 className='absolute rounded-xl'>Aviation</h3>
                <h4 className='absolute news-title1 rounded-xl absolute'>June 10, 2025</h4>
                <img src={News2} alt="News" className='rounded-lg w-[100%] h-[230px] sm:h-[360px]' />
              </Link>
              <h5 className='text-2xl font-bold'>Aviation Expertise: A Key to Success</h5>
              <p className='text-justify text-gray-700'>In the ever-evolving world of aviation, expertise goes far beyond technical skills
                or logistics. It has become a true strategic lever—an accelerator of success for companies and institutions striving to thrive
                in this demanding industry. This is precisely the foundation upon which HEFA Group has built its reputation.</p>
              <Link to='/news' className='button-news text-lg'>Read More...</Link>
            </div>
          </div>
          <div className="blog-container flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
            <div className="news-card w-[100%] lg:w-[40%]">
              <Link to='/news/Unlocking-Your-Company-s-Potential' className=''>
                <h3 className='absolute rounded-xl'>Business</h3>
                <h4 className='absolute news-title1 rounded-xl absolute'>May 02, 2025</h4>
                <img src={News1} alt="News" className='rounded-lg w-[100%] h-[230px] sm:h-[360px] ' />
              </Link>
              <h5 className='text-2xl font-bold'>Unlocking Your Company's Potential</h5>
              <p className='text-justify text-gray-700'>At HefaGroup, we believe that every company has unique potential ready to be unlocked.
                Through our agile and personalized consulting approach, we help you identify your growth drivers, optimize your processes,
                and innovate sustainably.</p>
              <Link to='/news' className='button-news text-lg'>Read More...</Link>
            </div>
            <div className="news-card w-[100%] lg:w-[40%]">
  
            </div>
          </div>
        </div>

      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default news