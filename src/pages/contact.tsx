import Header from "../components/header"
import image from '../assets/images/contact.webp'
import Footer from "../components/footer"
import { useState } from "react"

const contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('');
  const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbxV-8fniXKJ7WIr9HVbHwBo8kiX2sc4CkX86UnKOAYdG2qtVjru0D2Fm4f3icdkpldH/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await fetch(GOOGLE_SHEETS_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.type === 'opaque') {
        setStatus('Merci d\'avoir contacté HefaGroup, nous vous répondrons très bientôt !!!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('Échec de l\'envoi du formulaire.');
        console.error('Erreur de réponse (potentiellement réseau ou configuration):', response);
      }
    } catch (error) {
      setStatus('Erreur lors de l\'envoi du formulaire.');
      console.error('Erreur réseau ou interne:', error);
    } finally {
      setTimeout(() => {
        setStatus('');
      }, 10000)
    }
  };
  return (
    <div>
      <Header />
      <div className="space">

      </div>
      <div className='banner-page flex flex-col justify-center items-center h-[250px] sm:h-[400px]'>
        <h1 className='text-[35px] font-bold'>Contact</h1>
        <div className="line"></div>
      </div>
      <div className='service-header flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Free Consultation</h1>
        <div className="line"></div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form flex items-center h-[600px] lg:h-[500px] flex">
        <img src={image} alt="" className="hidden sm:block w-[50%] h-[100%]" />
        {status ? <h5 className='flex justify-center status-contact text-center text-xl'>{status}</h5> :
          <div className="contact-container flex flex-col gap-10 w-[50%]">
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="flex flex-col gap-6">
                <input onChange={handleChange} value={formData.name} type="text" id="name" name="name" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Name *" required />
              </div>
              <div>
                <input onChange={handleChange} value={formData.phone} type="text" id="phone" name="phone" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Phone *" required />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-10">
              <div className="flex flex-col gap-6">
                <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="border-b-1 border-gray-500 w-70 lg:w-50 xl:w-60" placeholder="Email *" required />
              </div>
              <select onChange={handleChange} value={formData.service} name="service" id="services" className="border-b-1 w-70 lg:w-50 xl:w-60" required>
                <option value="" selected disabled>Software Research</option>
                <option value="services">Services</option>
                <option value="consulting">Consulting</option>
                <option value="training">Training</option>
                <option value="representation">Representation</option>
              </select>
            </div>
            <textarea onChange={handleChange} value={formData.message} name="message" id="message" rows={4} className="border-b-1 border-gray-500 w-70 sm:w-[95%]" placeholder="Message"></textarea>
            <div className="flex items-center">
              <button type="submit" className='button-contact cursor-pointer rounded-lg'>Send Message</button>
            </div>
          </div>
        }
      </form>

      <Footer />
    </div>
  )
}

export default contact