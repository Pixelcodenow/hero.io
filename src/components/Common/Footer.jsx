import logo from "../../assets/logo.png";


const Footer = () => {
    return (
            <footer className="bg-[#001529] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <img src={logo} className="w-8 grayscale brightness-200" alt="" />
           <span className="text-lg font-bold">HERO.IO</span>
        </div>
        <p className="text-gray-400">Copyright © 2026 - All right reserved</p>
        <div className="flex gap-4 text-xl">
           <i className="fa-brands fa-x-twitter hover:text-purple-400 cursor-pointer"></i>
           <i className="fa-brands fa-linkedin hover:text-purple-400 cursor-pointer"></i>
           <i className="fa-brands fa-facebook hover:text-purple-400 cursor-pointer"></i>
        </div>
      </div>
    </footer>
    );
};

export default Footer;