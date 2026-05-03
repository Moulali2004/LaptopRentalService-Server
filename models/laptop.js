const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    specs: { 
        ram: { type: String, required: true },
        storage: { type: String, required: true },
        processor: { type: String, required: true },
        screenSize: { type: String, required: true },
        cpuModel: { type: String, required: true },
    },
    pricePerDay: { type: Number, required: true },
    category: {
        type: String,
        enum: ['student', 'business', 'gamers/creators', 'freelancers/developers'],
        required: true
    },
    securityDeposit: { type: Number, required: true },
    totalUnits: { type: Number, required: true },
    availableUnits: { type: Number, required: true },
    images: [{ type: String }],
    isActive: { type: Boolean, default: false },
    operatingSystem: { type: String, required: true },
    yearsOfUse: { type: Number, required: true }
});

const Laptop = mongoose.model('Laptop', laptopSchema);
module.exports = Laptop;