import Header from "../components/header"
import Invest from "../assets/images/investment.webp"
import Corporate from "../assets/images/corporate.webp"
import Services from "../assets/images/representation.webp"
import Training from "../assets/images/training.webp"
import market from "../assets/images/market.webp"
import sustainable from "../assets/images/sustainable.webp"
import partner from "../assets/images/partner.webp"
import attraction from "../assets/images/attraction.webp"
import Footer from "../components/footer"
import NewsLetter from "../components/newsLetter"
import { motion } from 'framer-motion'


const services = () => {
  return (
    <div>
      <Header />
      <div className="space">

      </div>
      <div className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'>
        <h1 className='text-[35px] font-bold'>Services</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
          className="line" />
      </div>
      <div className='service-header flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Our Solutions</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, scale: { type: "spring", visualDuration: 4, bounce: 0.2 } }}
          className="line" />
      </div>
      <div className="services-part flex flex-col justify-center items-center gap-10 ">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-20">
          <div className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
            <img src={Invest} alt="Development" className="rounded-xl w-30" />
            <h4 className="text-2xl font-bold">Business Developpement</h4>
            <p className="text-sm text-justify">We specialize in assembling and managing teams of highly skilled advisors who augment
              your in-house resources by providing valuable business models, strategies, and plans across
              Africa.</p>
          </div>
          <div className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
            <img src={Services} alt="Development" className="rounded-xl w-30" />
            <h4 className="text-2xl font-bold">Representation Services</h4>
            <p className="text-sm text-justify">We offer professional representation services for companies
              looking to establish or expand their presence in African markets, ensuring your interests
              are properly represented.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-20">
          <div className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
            <img src={Corporate} alt="Development" className="rounded-xl w-30" />
            <h4 className="text-2xl font-bold">Corporate Events</h4>
            <p className="text-sm text-justify">Our team specializes in organizing and managing
              corporate events that help build your brand presence and establish valuable connections
              in target markets.</p>
          </div>
          <div className="service-container flex flex-col justify-center items-center w-[100%] sm:w-[40%]">
            <img src={Training} alt="Development" className="rounded-xl w-30" />
            <h4 className="text-2xl font-bold">Training Facilitation</h4>
            <p className="text-sm text-justify">We provide specialized training programs designed to enhance
              the skills and capabilities of your team, preparing them for success in African markets.</p>
          </div>
        </div>
      </div>

      <div className="strategic">
        <div className='strategic-header flex flex-col justify-center items-center'>
          <h1 className='text-2xl sm:text-4xl font-bold'>Strategic Management Services</h1>
          <div className="line"></div>
        </div>
        <div className="strategic-container flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          <div className="sm:w-[20%] flex flex-col justify-center items-center gap-8 sm:gap-20 ">
            <div className="mission hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl text-center sm:text-end font-bold">Mission & Vision</h4>
              <p className="text-sm text-end text-white">Specifying organization's purpose and
                future direction</p>
            </div>
            <div className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl text-end font-bold">Performance Monitoring</h4>
              <p className="text-sm text-end text-white">Tracking results and adjusting
                strategies</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[300px] h-[300px] relative pie-chart-container">
            <div className="pie-chart">
              <div className="pie-slice mission-vision">
                <i className="fa-solid fa-bullseye text-2xl text-white"></i>
              </div>
              <div className="pie-slice performance-monitoring">
                <i className="fa-solid fa-chess-pawn text-2xl text-white"></i>
              </div>
              <div className="pie-slice strategy-development">
                <i className="fa-solid fa-chart-pie text-2xl text-white"></i>
              </div>
              <div className="pie-slice resource-allocation">
                <i className="fa-solid fa-code-compare text-2xl text-white"></i>
              </div>
            </div>
            <div className="pie-center">
              <h2 className="text-center">Organization Management</h2>
            </div>
          </div>
          <div className="w-[100%] sm:w-[20%] flex flex-col justify-center items-center gap-8 sm:gap-20 ">
            <div className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl sm:text-start text-center font-bold">Strategy Development</h4>
              <p className="text-sm text-start text-white">Creating comprehensive plans and
                initiatives</p>
            </div>
            <div className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <h4 className="text-2xl sm:text-start text-center font-bold">Resource Allocation</h4>
              <p className="text-sm text-start text-white">Distributing resources to execute
                policies and plans</p>
            </div>
          </div>
        </div>

      </div>
      <div className="expansion flex flex-col lg:flex-row justify-center items-center">
        <div className="expansion-container w-[100%] lg:w-[25%] h-[250px] flex flex-col items-center bg-gray-200">
          <img src={market} alt="Market" className="w-20" />
          <h4 className="text-xl">Market Research</h4>
          <div className="line"></div>
          <p className="text-center text-sm">Comprehensive analysis of target markets, competition, and opportunities specific to African regions.</p>
        </div>
        <div className="expansion-container w-[100%] lg:w-[25%] h-[250px] flex flex-col items-center bg-gray-300">
          <img src={partner} alt="Partner" className="w-20" />
          <h4 className="text-xl">Partner Identification</h4>
          <div className="line"></div>
          <p className="text-center text-sm">Finding reliable local partners and establishing productive joint ventures.</p>
        </div>
        <div className="expansion-container w-[100%] lg:w-[25%] h-[250px] flex flex-col items-center bg-gray-200">
          <img src={attraction} alt="Client" className="w-20" />
          <h4 className="text-xl">Client Acquisition</h4>
          <div className="line"></div>
          <p className="text-center text-sm">Helping foreign firms find their initial clients across African markets.</p>
        </div>
        <div className="expansion-container w-[100%] lg:w-[25%] h-[250px] flex flex-col items-center bg-gray-300">
          <img src={sustainable} alt="Sustainable" className="w-20" />
          <h4 className="text-xl">Sustainable Growth</h4>
          <div className="line"></div>
          <p className="text-center text-sm">Implementing long-term strategies for continued expansion.</p>
        </div>
      </div>
      <div className="service-plus flex flex-col items-center justify-center h-[300px] lg:h-[300px]">
        <h1 className='text-center text-2xl lg:text-4xl'>Optimize Operations for Maximum Efficiency</h1>
        <p className='text-justify sm:text-center text-sm sm:text-xl'>Drive innovation and lead your market segment. Contact us to explore how our consulting can
          position your business as a front.</p>
        <div className="plus-button rounded-full text-center w-[180px]">
          <a href='https://wa.me/237670897408?text=Bonjour%20je%20souhaite%20prendre%20un%20rendez%20vous' target='_blank'>Get In Touch</a>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default services