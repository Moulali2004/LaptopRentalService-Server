const Laptop = require('../models/laptop');

function handleAddLaptop(req, res) {
    const laptopData = req.body;
    const newLaptop = new Laptop({
        name: laptopData.name,
        brand: laptopData.brand,
        specs: laptopData.specs,
        pricePerDay: laptopData.pricePerDay,
        category: laptopData.category,
        securityDeposit: laptopData.securityDeposit,
        totalUnits: laptopData.totalUnits,
        availableUnits: laptopData.availableUnits,
        images: laptopData.images,
        isActive: laptopData.isActive,
        operatingSystem: laptopData.operatingSystem,
        yearsOfUse: laptopData.yearsOfUse
    });

    newLaptop.save()
        .then(laptop => res.status(201).json({ message: "Laptop added successfully"}))
        .catch(err => res.status(500).json({ message: "Error adding laptop", err: err}))
}

async function handleGetActiveLaptops(req, res) {
    try {
        const activeLaptops = await Laptop.find({ isActive: true });
        res.status(200).json({ laptops: { activeLaptops } });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

module.exports = {
    handleAddLaptop,
    handleGetActiveLaptops,
}