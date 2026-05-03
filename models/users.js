const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true }, 
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true},
    phone: { type: String, unique: true },
    password: { type: String, required: true, minlength: 6},
    idVerified: { type: Boolean, default: false},
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    userType: {
        type: String,
        enum: ['admin', 'student', 'Business', 'Gamer/Creator', 'Freelancer/Developer'],
        default: 'student'
    },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;