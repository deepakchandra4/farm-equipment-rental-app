"use client"
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const UserDetail = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchUsers = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/user/getall', {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setUserList(response.data);
        } catch (err) {
            console.error('Error fetching users:', err);
            if (err?.response?.status === 403) {
                toast.error('You are not authorized to view this page');
                router.push('/login');
            } else {
                toast.error('Failed to fetch users');
            }
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">User Details</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    {userList.map((user, index) => (
                        <div key={user._id || index} className="flex justify-between py-4 px-6 border-b last:border-b-0">
                            <span className="font-medium text-gray-900">{user.email}</span>
                            <span className="text-gray-500">{user.name || 'N/A'}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDetail;