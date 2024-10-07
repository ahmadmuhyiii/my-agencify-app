import React from 'react'
import Image from 'next/image'

const RightSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
    <div className="relative -mt-6">
      <Image
        src="/img/Happy-Man-PNG-Clipart-Background 2.png"
        alt="Person"
        width={556}
        height={574}
        className="rounded-lg"
      />

      {/* Layer Blur di bagian bawah gambar */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"></div>

       {/* card mengambang */}
        <div className="hidden lg:block absolute bottom-[200px] right-[0px] bg-white shadow-md p-4 rounded-lg z-10">
            <p className="text-sm text-gray-700">
            &quot;Une expérience parfaite pour<br />
            obtenir mon site internet le<br />
            processus a été rapide et efficace.&quot;
            </p>

            {/* Section bintang */}
            <div className="flex items-center my-2 space-x-1">
            {/* Bintang full */}
            {[...Array(4)].map((_, index) => (
                <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-CustomPink"
                viewBox="0 0 24 24"
                fill="currentColor"
                >
                <path d="M12 .587l3.668 7.431 8.197 1.18-5.934 5.772 1.4 8.158L12 18.896l-7.33 3.852 1.4-8.158-5.934-5.772 8.197-1.18L12 .587z" />
                </svg>
            ))}

            {/* Bintang setengah */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-CustomPink"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <defs>
                <linearGradient id="half-fill">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                </linearGradient>
                </defs>
                <path
                d="M12 .587l3.668 7.431 8.197 1.18-5.934 5.772 1.4 8.158L12 18.896l-7.33 3.852 1.4-8.158-5.934-5.772 8.197-1.18L12 .587z"
                fill="url(#half-fill)"
                />
            </svg>
            </div>

            {/* Profile Section */}
            <div className="flex items-center mt-2">
            <Image
                src="/img/Ellipse 7.png"
                alt="T"
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="ml-2">
                <strong>Thibault Ernout</strong>
                <p className="text-xs text-gray-500">Client du 9 Juin 2024</p>
            </div>
            </div>
            <div className="absolute -bottom-3 left-0 w-0 h-0 border-t-[26px] border-t-transparent border-r-[26px] rotate-180 border-r-white rounded-sm"></div>
        </div>

    </div>
  </div>
  )
}

export default RightSection;