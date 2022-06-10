const User = require("./userModel")
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt');
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ isDeleted: false });
        res.status(StatusCodes.OK).json({ data: users })
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const signUp = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const user = await User.findOne({ email, isDeleted: false });
        if (user) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'email already exist' });
        } else {
            if (confirmPassword != password) {
                res.status(StatusCodes.BAD_REQUEST).json({ message: "password doesn't match" });
            } else {
                bcrypt.hash(password, 7, async function (err, hash) {
                    if (err) throw err;
                    const newUser = new User({ name, email, password: hash, confirmPassword: hash, isDeleted: false });
                    const data = await newUser.save();
                    res.status(StatusCodes.CREATED).json({ data: data })
                })
            }

        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, isDeleted: false });
        if (!user) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'user not found' });
        } else {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.status(StatusCodes.OK).json({ message: "login success" });
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({ message: 'password is incorrect' });
            }
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const updateProfile = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email, password, confirmPassword } = req.body;
        const user = await User.findOne({ _id: id, isDeleted: false });
        if (user) {
            if (name) {
                await User.updateOne({ _id: id }, { name });
            }
            if (email) {
                await User.updateOne({ _id: id }, { email });
            }
            if (password) {
                if (password != confirmPassword) {
                    res.status(StatusCodes.BAD_REQUEST).json({ message: "password doesn't match" });
                } else {
                    bcrypt.hash(password, 7, async (err, hash) => {
                        if (err) throw err;
                        await User.updateOne({ _id: id }, { password: hash, confirmPassword: hash });
                    });
                }
            }
            res.status(StatusCodes.OK).json({ message: "user updated" });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'user not found' });
        }

    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
}
const softDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id, isDeleted: false });
        if (user) {
            const data = await User.updateOne({ _id: id, isDeleted: false }, { isDeleted: true });
            res.status(StatusCodes.OK).json({ message: "deleted 1 user", data });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'user not found' });
        }

    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
    }
}
module.exports = { getAllUsers, signUp, signIn, updateProfile, softDelete }