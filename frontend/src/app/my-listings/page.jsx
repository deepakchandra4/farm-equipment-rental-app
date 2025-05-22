'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import api from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';

export default function MyListingsPage() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    const fetchListings = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.get('/api/equipment/mylistings');
            setListings(response.data || []);
        } catch (error) {
            console.error('Error fetching listings:', error);
            setError('Failed to load your listings');
            toast.error('Failed to load your listings');
            setListings([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }
        fetchListings();
    }, [isAuthenticated, router]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this listing?')) {
            return;
        }

        try {
            await api.delete(`/api/equipment/${id}`);
            toast.success('Listing deleted successfully');
            fetchListings();
        } catch (error) {
            console.error('Error deleting listing:', error);
            toast.error('Failed to delete listing');
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading your listings...</p>
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
                            onClick={fetchListings}
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
                        My Listings
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Manage your equipment listings
                    </p>
                </div>

                {listings.length === 0 ? (
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-lg">You haven&apos;t listed any equipment yet.</p>
                        <button
                            onClick={() => router.push('/add-equipment')}
                            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                            Add Equipment
                        </button>
                    </div>
                ) : (
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {listings.map((item) => (
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
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => router.push(`/edit-equipment/${item._id}`)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500">
                                        <p>Location: {item.location}</p>
                                        <p>Category: {item.category}</p>
                                        <p>Status: {item.isAvailable ? 'Available' : 'Rented'}</p>
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