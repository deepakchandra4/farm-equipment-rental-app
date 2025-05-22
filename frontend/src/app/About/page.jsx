'use client';

import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About AgriRent
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Your trusted platform for farm equipment rental
                    </p>
                </div>

                <div className="mt-12">
                    <div className="relative h-96 w-full">
                        <Image
                            src="/about-hero.jpg"
                            alt="Farm equipment"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>

                    <div className="mt-12 prose prose-lg mx-auto">
                        <h2>Our Mission</h2>
                        <p>
                            At AgriRent, we&apos;re committed to making farm equipment accessible to everyone. 
                            We believe that modern farming tools shouldn&apos;t be limited to those who can afford to buy them outright.
                        </p>

                        <h2>What We Offer</h2>
                        <p>
                            We provide a platform where farmers can:
                        </p>
                        <ul>
                            <li>Rent high-quality farm equipment at affordable rates</li>
                            <li>List their equipment for rent and earn additional income</li>
                            <li>Access a wide range of equipment from tractors to harvesters</li>
                            <li>Connect with other farmers in their area</li>
                        </ul>

                        <h2>Why Choose Us</h2>
                        <p>
                            We stand out because we:
                        </p>
                        <ul>
                            <li>Verify all equipment and users for safety and reliability</li>
                            <li>Provide 24/7 customer support</li>
                            <li>Offer flexible rental periods</li>
                            <li>Ensure competitive pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
