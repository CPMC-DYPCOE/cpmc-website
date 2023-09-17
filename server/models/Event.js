const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema({
    event_name: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: String, required: true },
    event_date: { type: String, required: true },
    event_time: { type: String, required: true },
    venue: { type: String, required: true },
    is_completed: { type: Boolean, required: true },
    is_join_form: { type: Boolean, required: true },
    images: [String],
});
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
