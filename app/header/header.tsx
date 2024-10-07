import Image from 'next/image';
import { useState } from 'react';
import DropdownServices from './DropdownServices';
import DropdownExpertise from './DropdownExpertise';
import DropdownExpertiseMobile from './DropdownExpertiseMobile';
import DropdownServicesMobile from './DropdownServicesMobile';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image 
        src="/img/agencify-logo-220 1.png" 
        alt="agencify"
        width={180} 
        height={45} 
        className="w-40 ml-2 h-auto md:w-45 lg:w-50"
        />


         {/* Menu Burger Button for Mobile */}
         <button 
          className="lg:hidden text-CustomPink focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
           
            {/* Mobile Menu */}
            {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-white bg-opacity-100 z-40" onClick={() => setIsMenuOpen(false)}></div>
                        
                        {/* Menu Content */}
                        <div className="absolute inset-x-0 top-0 p-6 bg-white z-50 lg:hidden">
                            {/* Container untuk logo dan tombol close */}
                            <div className="flex justify-between items-center">
                                {/* Logo di sebelah kiri */}
                                <Image 
                                    src="/img/agencify-logo-220 1.png" 
                                    alt="agencify"
                                    width={100} 
                                    height={20} 
                                    className="w-40 -ml-2 h-auto"
                                />
                                
                                {/* Tombol X di sebelah kanan */}
                                <button 
                                    className="text-black focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu List */}
                            <ul className="space-y-4 mt-4">
                                <li className="border-b border-gray-300 pb-2"><a href="#" className="text-CustomPink font-semibold text-lg">Accueil</a></li>
                                <li className="border-b border-gray-300 pb-2"><DropdownExpertiseMobile /></li>
                                <li className="border-b border-gray-300 pb-2"><DropdownServicesMobile /></li>
                                <li className="border-b border-gray-300 pb-2"><a href="#" className="text-black font-semibold text-lg">À propos</a></li>
                                <li className="border-b border-gray-300 pb-2"><a href="#" className="text-black font-semibold text-lg">Contact</a></li>
                                <div className="grid grid-cols-1 justify-items-center">
                                    <button className="bg-pink-500 text-white py-2 px-8 mt-12 rounded-full items-center">
                                        <span className=''>Demander un devis</span>
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </>
                )}

        
        {/* Navigasi */}
        <nav className="hidden lg:flex items-center justify-between w-full">
            {/* Navigasi di tengah */}
            <div className="flex space-x-8 mx-auto">
                <a href="#" className="text-CustomPink font-semibold text-lg">Accueil</a>
                <DropdownExpertise />
                <DropdownServices />
                <a href="#" className="text-black font-semibold text-lg">À propos</a>
                <a href="#" className="text-black font-semibold text-lg">Contact</a>
            </div>
            
            {/* Button di kanan */}
            <button className="bg-pink-500 text-white py-2 px-4 rounded-full ml-auto grid grid-cols-2 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
                >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                <span className='-ml-12'>Demander un devis</span>
            </button>
        </nav>


      </div>
    </header>
  );
};

export default Header;
