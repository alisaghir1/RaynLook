import React from 'react'

const FirstSection = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white mt-10">Our Services</h2>
      <p className="mb-12 text-lg text-customGold">Here are a few of the excellent services we provide at Rayn Look.</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-white">Premium Contact Lenses</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">------------</p>
                <p className="mb-2 text-white">We offer a wide variety of premium contact lenses designed for comfort, clarity, and long-lasting wear. Whether you need daily, monthly, or specialty lenses, we have you covered.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-white">Prescription Contact Lenses</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">------------</p>
                <p className="mb-2 text-white">Get your prescription lenses customized to your exact specifications. Our expert team ensures that your lenses fit perfectly and provide the best visual clarity.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-white rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-white rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-white">Eye Health Consultation</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-white uppercase">------------</p>
                <p className="mb-2 text-white">Our eye health experts offer personalized consultations to help you choose the best contact lenses for your eye health needs, ensuring comfort and safety.</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-white">Contact Lens Fitting</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">------------</p>
                <p className="mb-2 text-white">We offer professional fitting services to ensure your contact lenses fit perfectly and comfortably, tailored to your unique eye shape and prescription.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-white rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-white rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-white">Lens Care & Maintenance</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-white uppercase">------------</p>
                <p className="mb-2 text-white">We provide expert advice on lens care and maintenance, helping you prolong the life of your lenses and maintain optimal eye health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
