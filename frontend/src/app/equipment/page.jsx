'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import api from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';

export default function EquipmentPage() {
    const [equipment, setEquipment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const fetchEquipment = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/api/equipment/listequipment');
            setEquipment(response.data || []);
        } catch (error) {
            console.error('Error fetching equipment:', error);
            setError('Failed to load equipment');
            toast.error('Failed to load equipment');
            setEquipment([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEquipment();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleRent = () => {
        if (!isAuthenticated) {
            toast.error('Please login to rent equipment');
            router.push('/login');
            return;
        }
        // TODO: Implement rental functionality
        toast.success('Rental request sent!');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading equipment...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-red-600 text-lg">{error}</p>
                        <button
                            onClick={fetchEquipment}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Available Equipment
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Browse our selection of high-quality farm equipment
                    </p>
                </div>

                {equipment.length === 0 ? (
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-lg">No equipment available at the moment.</p>
                    </div>
                ) : (
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {equipment.map((item) => (
                            <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                                    <p className="mt-2 text-gray-600">{item.description}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-2xl font-bold text-green-600">
                                            ${item.price}/day
                                        </span>
                                        <button
                                            onClick={handleRent}
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                                        >
                                            Rent Now
                                        </button>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500">
                                        <p>Location: {item.location}</p>
                                        <p>Category: {item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 