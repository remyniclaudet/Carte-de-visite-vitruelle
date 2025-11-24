import React, { useState } from "react";
import ViviworksAi from "./ViviworksAi";
import ViviworksFr from "./ViviworksFr";

const BusinessCardRecto = () => {
  const [activeCard, setActiveCard] = useState('viviworks-ai');

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Boutons de sélection */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCard('viviworks-ai')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeCard === 'viviworks-ai'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Viviworks.Ai
        </button>
        <button
          onClick={() => setActiveCard('viviworks-fr')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeCard === 'viviworks-fr'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Viviworks.Fr
        </button>
      </div>

      {/* Carte de visite active */}
      {activeCard === 'viviworks-ai' ? <ViviworksAi /> : <ViviworksFr />}
    </div>
  );
};

export default BusinessCardRecto;