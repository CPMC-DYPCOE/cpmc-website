const connectDB = require('../../../../server/db/connect');
const Event = require('../../../../server/models/Event');
const Student = require('../../../../server/models/Student');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        await connectDB();
        try {
            const { event_id } = req.body;
            const students = await Student.find({ events: event_id });

            res.status(200).json({ students });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = handler;
