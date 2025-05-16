"use client";
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  brand: Yup.string().required('Brand is required'),
  image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
  price: Yup.number().positive('Price must be positive').required('Price is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
});

const AddEquipmentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/equipment/addequipment', data)
      .then(() => {
        toast.success('Equipment added successfully');
      })
      .catch((err) => {
        console.error(err);
        toast.error(err?.response?.data?.message || 'Some error occurred');
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Add New Equipment</h2>
          <p className="mt-2 text-sm text-gray-600">List your agricultural equipment for rent</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Equipment Title
              </label>
              <input
                {...register('title')}
                type="text"
                id="title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., John Deere Tractor"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            {/* Brand */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                {...register('brand')}
                type="text"
                id="brand"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
            </div>

            {/* Image */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                {...register('image')}
                type="text"
                id="image"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Daily Rate ($)
              </label>
              <input
                {...register('price')}
                type="number"
                id="price"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register('description')}
                id="description"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                {...register('category')}
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select a category</option>
                <option value="tractor">Tractor</option>
                <option value="harvester">Harvester</option>
                <option value="planter">Planter</option>
                <option value="irrigation">Irrigation Equipment</option>
                <option value="other">Other</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentPage;
