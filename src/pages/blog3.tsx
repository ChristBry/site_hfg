import Header from '../components/header'
import Footer from '../components/footer'
import NewsLetter from '../components/newsLetter'
import blogimage from '../assets/images/iata.jpg'

const blog3 = () => {
    return (
        <div>
            <Header />
            <div className="space">

            </div>
            <div className='banner-page flex flex-col justify-center items-center h-[200px]'>
                <h1 className='text-xl sm:text-2xl lg:text-4xl font-bold'>Industry Recognition: IATA and Commonwealth</h1>
                <div className="line"></div>
            </div>
            <div className='blogpage-part flex flex-col gap-10 lg:gap-4'>
                <div className='flex flex-col sm:flex-row justify-center items-center'>
                    <img src={blogimage} alt="image" className='w-[80%]lg:w-[40%] sm:w-[50%] rounded-xl' />
                    <div className='blogpage-header'>
                        <h1 className='text-2xl lg:text-4xl font-bold'>More Than Awards — A Shared Mission.</h1>
                        <p className='text-justify'>
                            At YAAPA (Young African Aviation Professionals Association), we believe in hard work, dedication, and a relentless
                            pursuit of excellence in shaping the future of aviation in Africa. That’s why we are both honored and humbled to
                            share some major milestones that reflect not only our commitment, but the trust and recognition we’ve earned from
                            global and regional institutions.
                        </p>
                    </div>
                </div>
                <div className='blogpage-content'>
                    <h4 className='text-2xl font-bold'>The First-Ever IATA High Flyer Award</h4>
                    <p>
                        In collaboration with Qatar Airways, the International Air Transport Association (IATA) awarded YAAPA the first-ever High Flyer Award.
                        This recognition is more than just a trophy—it’s a powerful validation of our work in inspiring and guiding the next generation of aviation
                        professionals across Africa. This award showcases our dedication to capacity-building, youth empowerment, and creating impactful pathways
                        into the aviation industry.
                    </p>
                    <h4 className='text-2xl font-bold'>The Commonwealth Point of Light Award</h4>
                    <p>
                        Recognized by Her Majesty The Queen, YAAPA was also the proud recipient of the Commonwealth Point of Light Award. This prestigious honor is
                        granted to individuals or organizations who are making a meaningful difference in their communities. This award reflects our commitment to
                        social impact through aviation, promoting inclusivity, education, and leadership in a sector often seen as out of reach for many young Africans.
                    </p>
                    <h4 className='text-2xl font-bold'>Recognition from the African Civil Aviation Organization (AFCAC)</h4>
                    <p>
                        During the 50th anniversary of the African Civil Aviation Organization (AFCAC), YAAPA received a Certificate of Recognition for its efforts in youth
                        engagement and aviation development on the continent. This moment marked a milestone in our journey—standing side by side with policymakers, regulators,
                        and industry leaders, reinforcing the need for youth voices in aviation’s future.
                    </p>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default blog3