
const Ticket =require('./Schema')

// Save booking
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movie: String,
  slot: String,
  seats: Object,
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

// Save booking
router.post('/api/booking', async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;
    const booking = new Booking({ movie, slot, seats });
    const saved = await booking.save();
    res.status(200).json({ message: "Booking successful", data: saved });
  } catch (err) {
    res.status(500).json({ message: "Error saving booking", error: err.message });
  }
});

// Fetch last booking
router.get('/api/booking', async (req, res) => {
  try {
    const latestBooking = await Booking.findOne().sort({ createdAt: -1 });

    if (!latestBooking) {
      return res.status(200).json({ message: "No previous booking found", data: null });
    }

    res.status(200).json({ message: "Success", data: latestBooking });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;
