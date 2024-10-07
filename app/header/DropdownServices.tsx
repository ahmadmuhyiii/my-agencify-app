import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const DropdownServices = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="relative inline-block">
        <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}  // Toggle dropdown
              className="text-black font-semibold text-lg"
            >
                <div className="flex items-center">
                <span className="mr-2">Nos services</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
            </button>
        {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-3">
                  {/* Item Optimisation */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Image src="/img/logo/approuve.png" width={35} height={35} alt={''} />
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
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/couches.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Design graphique</p>
                      <p className="text-xs text-gray-500">Web & print</p>
                    </div>
                  </li>
                  {/* Item Développement web */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/360.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Développement web</p>
                      <p className="text-xs text-gray-500">Desktop & Mobile</p>
                    </div>
                  </li>
                  {/* Item Suivi & support */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/compte.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Suivi & support</p>
                      <p className="text-xs text-gray-500">Dans votre projet</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
    </div>
  )
}

export default DropdownServices