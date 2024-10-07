import React from 'react'

const LeftSection = () => {
  return (
   
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8"> 
            <h1 className="sm:text-sm lg:text-xl font-bold mt-5 text-CustomPink leading-tight">
            Transformez votre vision en réalité numérique !
            </h1>
            <p className='text-2xl lg:text-6xl font-semibold mt-7'>
            L’agence digital dédié
            aux entreprises 
            </p>
            <p className="hidden lg:block text-lg font-semibold text-black mt-9">
            AGENCIFY est une agence française spécialisée dans le Développement <br />
            Web, qui identifie vos besoins pour vous accompagner dans la création <br />
            de votre site sur-mesure et dans vos projets digitaux.
            </p>
            <div className="hidden lg:block mt-10 space-x-4">
            <button className="bg-CustomPink text-white py-2 px-12 rounded-full">Recevoir nos offres</button>
            <button className="border border-CustomPink text-CustomPink py-2 px-12 rounded-full">Prendre un rendez-vous</button>
            </div>
        </div>
  )
}

export default LeftSection;