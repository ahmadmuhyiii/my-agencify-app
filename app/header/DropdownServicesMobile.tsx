import { useState } from 'react';
import Image from 'next/image';

const DropdownServicesMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Dropdown Header */}
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-black text-lg font-semibold">Nos services</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Dropdown Content */}
            {isOpen && (
                <ul className="space-y-2 mt-2">
                    <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                        <Image src="/img/logo/approuve.png" width={25} height={25} alt={''} />
                        <div className="ml-2 flex flex-col">
                            <div className="flex items-center">
                                <p className="font-semibold text-sm">Optimisation</p>
                                {/* La plus populaire label */}
                                <div className="flex items-center bg-green-100 text-green-500 text-xs font-semibold ml-2 py-1 px-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                                <span className="ml-1">
                                    La plus populaire
                                </span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500">Web</p>
                        </div>
                    </li>
                     {/* Item Design graphique */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/couches.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Design graphique</p>
                      <p className="text-xs text-gray-500">Web & print</p>
                    </div>
                  </li>
                  {/* Item Développement web */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/360.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Développement web</p>
                      <p className="text-xs text-gray-500">Desktop & Mobile</p>
                    </div>
                  </li>
                  {/* Item Suivi & support */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/compte.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Suivi & support</p>
                      <p className="text-xs text-gray-500">Dans votre projet</p>
                    </div>
                  </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownServicesMobile;
