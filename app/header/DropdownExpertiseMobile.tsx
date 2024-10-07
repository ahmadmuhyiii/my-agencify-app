import { useState } from 'react';
import Image from 'next/image';

const DropdownExpertiseMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div>
            {/* Dropdown Header */}
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-black text-lg font-semibold">Notre expertise</span>
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
                    {/* Item Magento */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/magento.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Magento</p>
                      <p className="text-xs text-gray-500">Le CMS incontournable</p>
                    </div>
                  </li>
                  {/* Item Wordpress */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/WordPress.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Wordpress</p>
                      <p className="text-xs text-gray-500">Le CMS le plus connu</p>
                    </div>
                  </li>
                  {/* Item Laravel */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/Laravel.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Laravel</p>
                      <p className="text-xs text-gray-500">Le Framework compétant</p>
                    </div>
                  </li>
                  {/* Item Woo Commerce */}
                  <li className="flex items-center hover:bg-gray-100 cursor-pointer">
                  <Image src="/img/logo/woo.png" width={25} height={25} alt={''} />
                    <div className='ml-2'>
                      <p className="font-semibold text-sm">Woo Commerce</p>
                      <p className="text-xs text-gray-500">Création de commerce</p>
                    </div>
                  </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownExpertiseMobile;
