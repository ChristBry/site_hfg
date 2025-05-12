import Header from "../components/header"
import image from '../assets/images/contact.webp'
import Footer from "../components/footer"

const contact = () => {
  return (
    <div>
      <Header />
      <div className="space">

      </div>
      <div className='banner-page flex flex-col justify-center items-center h-[200px]'>
        <h1 className='text-4xl font-bold'>Contact</h1>
        <div className="line"></div>
      </div>
      <div className='service-header flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Free Consultation</h1>
        <div className="line"></div>
      </div>
      <form className="contact-form h-[600px] lg:h-[500px] flex">
        <img src={image} alt="" className="hidden sm:block w-[50%] h-[100%]" />
        <div className="contact-container flex flex-col gap-10 w-[50%]">
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex flex-col gap-6">
              <input type="text" id="name" name="name" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Name *" required />
            </div>
            <div>
              <input type="text" id="phone" name="phone" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Phone *" required />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="flex flex-col gap-6">
              <input type="email" id="email" name="email" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Email *" required />
            </div>
            <select name="services" id="services" className="border-b-1 w-70 lg:w-50 xl:w-60" required>
              <option value="" selected disabled>Software Research</option>
              <option value="services">Services</option>
              <option value="consulting">Consulting</option>
              <option value="training">Training</option>
              <option value="representation">Representation</option>
            </select>
          </div>
          <textarea name="Message" id="message" rows={4} className="border-b-1 border-gray-500 w-70 sm:w-[95%]" placeholder="Message"></textarea>
          <div className="flex items-center">
            <button type="submit" className='button-contact rounded-lg'>Send Message</button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default contact