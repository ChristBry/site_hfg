
const header = () => {
  return (
    <div className="header">
        <div className='infos-header-container flex justify-between items-center p-4'>
            <div className="infos-header-title w-[100%] sm:flex sm:w-[80%] sm:gap-10">
                <p className=""><i className="fa-solid fa-envelope"></i>contact@hefagroups.com</p>
                <p><i className="fa-solid fa-phone"></i>(237) 670-897-408</p>
                <p><i className="fa-solid fa-location-dot"></i>Douala, Cameroun</p>
            </div>
            <div className="infos-header-social w-[50%] h-[40px] flex justify-end">
                <a href="https://www.facebook.com/share/1LnXUSik5f/?mibextid=wwXIfr" target="_blank" className="border border-white rounded-full w-[40px] facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                <a href="https://www.instagram.com/fadimatounoutchemo?igsh=MTAwa2hkajR3b3F2aw==" target="_blank" className="border border-white rounded-full w-[40px] instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                <a href="https://www.linkedin.com/in/fadimatou-noutchemo-103699b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="border border-white rounded-full w-[40px] linkedin"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default header