
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
                <a href="#" className="border border-white rounded-full w-[40px] facebook"><i className="fa-brands fa-facebook-f text-xl"></i></a>
                <a href="#" className="border border-white rounded-full w-[40px] instagram"><i className="fa-brands fa-instagram text-xl"></i></a>
                <a href="#" className="border border-white rounded-full w-[40px] linkedin"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default header