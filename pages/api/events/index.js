const { validateEmail } = require('../../../utils/utils');
const connectDB = require('../../../server/db/connect');
const Event = require('../../../server/models/Event');

const handler = async (req, res) => {

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

      await newEvent.save();

      res.status(200).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = handler;
