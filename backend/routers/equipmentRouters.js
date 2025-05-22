const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipmentModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'agrirent_secret_key_2024';

// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.user.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Get all equipment
router.get('/listequipment', async (req, res) => {
    try {
        const equipment = await Equipment.find();
        res.json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user's equipment listings
router.get('/mylistings', verifyToken, async (req, res) => {
    try {
        const equipment = await Equipment.find({ owner: req.userId });
        res.json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single equipment
router.get('/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add equipment
router.post('/addequipment', verifyToken, async (req, res) => {
    try {
        const newEquipment = new Equipment({
            ...req.body,
            owner: req.userId
        });
        const equipment = await newEquipment.save();
        res.status(201).json(equipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update equipment
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        // Check if user is the owner
        if (equipment.owner.toString() !== req.userId) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const updatedEquipment = await Equipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedEquipment);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete equipment
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        // Check if user is the owner
        if (equipment.owner.toString() !== req.userId) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await equipment.deleteOne();
        res.json({ message: 'Equipment removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;