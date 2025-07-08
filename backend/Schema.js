// Schema.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  movie: { type: String, required: true },
  slot: { type: String, required: true },
  seats: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ticket", TicketSchema);

