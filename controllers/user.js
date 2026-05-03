const User = require('../models/users');
const { setUser } = require('../services/authentication');

function handleUserSignup(req, res) {
    // Handle user signup logic here
    const {fullname, username, email, phone, password, userType} = req.body;

    const newUser = new User({
        fullname,
        username,
        email, 
        phone,
        password,
        userType
    });

    newUser.save()
        .then(user => res.status(201).json({ message: 'User created successfully', user: User}))
        .catch(err => res.status(500).json({ message: 'Error creating user', error: err }));
}

async function handleGetUsers(req, res){
        try {   
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching users', error: err });
        }
}

async function handleUserLogin(req, res) {
    // Handle user login logic here
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = setUser(user);
        res.cookie("uid", token);
        res.status(200).json({ token, user: {
            id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: user.role,
            userType: user.userType
        } });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err });
    }
}

module.exports = {
    handleUserSignup,
    handleGetUsers,
    handleUserLogin,
}