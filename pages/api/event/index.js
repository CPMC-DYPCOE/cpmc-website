const { validateEmail } = require('../../../utils/utils');
const connectDB = require('../../../server/db/connect');
const Event = require('../../../server/models/Event');

const handler = async (req, res) => {

  if (req.method == 'GET') {
    const eventId = req.eventId;
    const events = Event.find({ eventId });
  }

  if (req.method === 'POST') {

    await connectDB();
    try {
      const {
        event_name,
        caption,
        description,
        event_date,
        event_time,
        venue,
        is_completed,
        images
      } = req.body;

      if (
        !event_name ||
        !caption ||
        !description ||
        !event_date ||
        !event_time ||
        !venue ||
        !is_completed
      ) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create a new Event document
      const newEvent = new Event({
        event_name,
        caption,
        description,
        event_date,
        event_time,
        venue,
        is_completed,
        images
      });

      // Save the new Event document to the database
      const event = await newEvent.save();

      res.status(200).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


};

module.exports = handler;
