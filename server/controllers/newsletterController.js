const Newsletter = require('../models/Newsletter');

exports.subscribeNewsletter = async (req, res) => {
    const { name, email } = req.body;
    console.log('Request received with:', { name, email });

    if (!name || !email) {
        console.log('Validation failed: Missing name or email');
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    try {
        const existingSubscriber = await Newsletter.findOne({ email });
        if (existingSubscriber) {
            console.log('Duplicate email found:', email);
            return res.status(400).json({ error: 'This email is already subscribed.' });
        }

        const newSubscriber = new Newsletter({ name, email });
        
        // Save with detailed logging for debugging
        await newSubscriber.save()
            .then((savedDoc) => {
                console.log('Saved:', savedDoc); // Logs the saved document
                res.status(201).json({ message: 'Subscription successful!', data: savedDoc });
            })
            .catch((err) => {
                console.error('Error during save:', err); // Logs any error that occurs during save
                res.status(500).json({ error: 'Internal server error while saving.' });
            });

    } catch (error) {
        console.error('Unexpected error in try/catch block:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};
