import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const DropdownExpertise = () => {
    const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  return (
    <div className="relative inline-block">
            <button
              onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}  // Toggle dropdown
              className="text-black font-semibold text-lg"
            >
                <div className="flex items-center">
                <span className="mr-2">Notre expertise</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
            </button>
            {isExpertiseOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-2">
                  {/* Item Magento */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/magento.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Magento</p>
                      <p className="text-xs text-gray-500">Le CMS incontournable</p>
                    </div>
                  </li>
                  {/* Item Wordpress */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/WordPress.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Wordpress</p>
                      <p className="text-xs text-gray-500">Le CMS le plus connu</p>
                    </div>
                  </li>
                  {/* Item Laravel */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/Laravel.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Laravel</p>
                      <p className="text-xs text-gray-500">Le Framework compétant</p>
                    </div>
                  </li>
                  {/* Item Woo Commerce */}
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/woo.png" width={35} height={35} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Woo Commerce</p>
                      <p className="text-xs text-gray-500">Création de commerce</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
  )
}

export default DropdownExpertise