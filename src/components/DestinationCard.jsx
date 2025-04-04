import React from 'react';

function DestinationCard({ destination }) {
  const { name, location, image, description, price } = destination;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-100">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-2">{location}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-xl font-bold text-indigo-600">{price}</p>
      </div>
    </div>
  );
}

export default DestinationCard;