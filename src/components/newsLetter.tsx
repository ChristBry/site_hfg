import Logo from '../assets/images/logo.webp'
import { motion } from 'framer-motion'
import { useState } from 'react'

const newsLetter = () => {
    const [formData, setFormData] = useState({
        email: ''  
      })
      const [status, setStatus] = useState('');
      const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbypeEm9hhyopBsa6zv89TpIwWV7ysnbPA7OnCH9hIo9k3XSRo-cXhrAU6W_XfRlrg0CYw/exec';  
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData({ email: value });
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
            setStatus('Merci de vous être abonné à notre Newsletter.');
            setFormData({ email: ''}); 
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
        <motion.div className='newsletter'>
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ visualDuration: 1, duration: 1 }}
                className='justify-center items-center flex flex-col'>
                <img src={Logo} alt="logo" className='w-[60%] sm:w-[20%] mx-auto mt-10' />
                <p className='text-center text-xl'>Subscribe to our newsletter to be informed of our latest news and updates.</p>
                <div className='newsletter-input flex items-center justify-center w-[100%]'>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='name@mail.com' className='w-[60%] sm:w-[30%] lg:w-[25%] h-[50px] rounded-s-full border-2' />
                    <button type="submit" className='w-[25%] sm:w-[20%] xl:w-[10%] h-[53px] rounded-e-full border-2 cursor-pointer'>Subscribe</button>
                </div>
                {status && <h5 className='status-news text-center text-xl'>{status}</h5>}
            </motion.form>
        </motion.div>

    )
}

export default newsLetter