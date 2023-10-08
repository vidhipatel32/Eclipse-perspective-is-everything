const mongoose = require('mongoose');
dbURI="mongodb+srv://travel:travel2010@cluster1.dh0gibx.mongodb.net/travel?retryWrites=true&w=majority"
async function connectToDatabase() {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');


    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = connectToDatabase;