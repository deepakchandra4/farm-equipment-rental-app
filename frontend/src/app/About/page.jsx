import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About AgriRent
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Your trusted partner in agricultural equipment rental
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Farm equipment"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-500">
                At AgriRent, we're committed to making agricultural equipment accessible to farmers of all sizes. 
                We understand that owning heavy machinery can be a significant investment, which is why we offer 
                flexible rental solutions that help farmers optimize their operations without the burden of ownership.
              </p>
              <p className="text-gray-500">
                Our platform connects equipment owners with farmers who need them, creating a sustainable ecosystem 
                that benefits everyone in the agricultural community.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Us?</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Quality Equipment</h4>
              <p className="mt-2 text-gray-500">
                All our equipment undergoes regular maintenance and inspection to ensure optimal performance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Flexible Rental Periods</h4>
              <p className="mt-2 text-gray-500">
                Choose from daily, weekly, or monthly rental options to suit your farming needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-blue-600 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900">Expert Support</h4>
              <p className="mt-2 text-gray-500">
                Our team of agricultural experts is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you're a small-scale farmer or managing a large agricultural operation, 
            AgriRent is here to support your success. Join our growing community of farmers 
            and equipment owners today.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
