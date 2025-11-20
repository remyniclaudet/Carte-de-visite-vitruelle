import React from "react";
import qrCode from "../assets/qr.png";
import logo from "../assets/logo.png";

const BusinessCardRecto = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="relative w-full max-w-[400px] md:max-w-[900px] rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 bg-black">

        <div className="absolute inset-0 z-0">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover low-opacity-logo"
          />
        </div>

        
        <div className="relative z-10 flex flex-col md:flex-row h-full min-h-[250px] md:min-h-[350px]">

          
          <div className="flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              
              <div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-light mb-1 md:mb-2">Fondateur</p>
                <h2 className="text-white font-semibold text-sm md:text-base lg:text-lg xl:text-xl">BELLARA Aiman</h2>
              </div>

             
              <div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-light mb-1 md:mb-2">Email</p>
                <p className="text-white text-sm md:text-base lg:text-lg break-words">aiman.bellara@viviworks.ai</p>
              </div>

             
              <div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-light mb-1 md:mb-2">Téléphone</p>
                <p className="text-white text-sm md:text-base lg:text-lg">0033784789910</p>
              </div>

             
              <div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-light mb-1 md:mb-2">Site web</p>
                <p className="text-white text-sm md:text-base lg:text-lg">viviworks.ai</p>
              </div>

              
              <div>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base font-light mb-1 md:mb-2">Adresse</p>
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  24–26 Arcadia Avenue, Fin0000<br />
                  Londres, Royaume-Uni, N3 2JU
                </p>
              </div>
            </div>
          </div>

          
          <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
            <div className="flex justify-center items-center">
              <img
                src={qrCode}
                alt="QR Code"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 
                         rounded-xl shadow-lg bg-white p-2 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto;