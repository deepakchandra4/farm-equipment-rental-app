import React from 'react';
import Link from 'next/link';

const EquipmentDetailsPage = ({ params }) => {
  // Mock data - replace with actual data from your backend
  const equipment = {
    id: params.id,
    name: 'John Deere Tractor',
    category: 'Tractor',
    dailyRate: 150,
    location: 'Farmington, CA',
    images: [
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Well-maintained John Deere tractor, perfect for small to medium-sized farms. Features include GPS navigation, climate-controlled cabin, and advanced hydraulic systems.',
    specifications: {
      year: '2020',
      model: '8R 410',
      hours: '500',
      horsepower: '410',
      fuelType: 'Diesel',
      transmission: 'AutoPower IV',
    },
    owner: {
      name: 'John Smith',
      rating: 4.8,
      reviews: 24,
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-96">
            <img
              src={equipment.images[0]}
              alt={equipment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-medium">
              ${equipment.dailyRate}/day
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{equipment.name}</h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {equipment.category}
              </span>
            </div>

            {/* Location and Owner Info */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-gray-500">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {equipment.location}
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(equipment.owner.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {equipment.owner.rating} ({equipment.owner.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-600">{equipment.description}</p>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {Object.entries(equipment.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500 capitalize">{key}</dt>
                    <dd className="mt-1 text-lg font-semibold text-gray-900">{value}</dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Information */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-900">Owner Information</h2>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xl font-medium text-gray-600">
                      {equipment.owner.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{equipment.owner.name}</h3>
                  <p className="text-sm text-gray-500">Equipment Owner</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Rent Now
              </button>
              <button
                type="button"
                className="flex-1 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailsPage; 