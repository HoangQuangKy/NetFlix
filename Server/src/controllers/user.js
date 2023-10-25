import user from "../models/user.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const createNewUser = async (req, res) => {
    try {
        const name = req.body.name;
        const address = req.body.address;
        const age = req.body.age;
        const dateOfBirth = req.body.dateOfBirth;
        const username = req.body.username;
        const password = req.body.password;
        const auth = req.body.auth;
        const phonenumber = req.body.phonenumber

        const checkUser = await user.findOne({
            username: username
        })
        if (checkUser) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)
        const data = await user.create({
            name: name,
            address: address,
            age: age,
            dateOfBirth: dateOfBirth,
            username: username,
            password: hashPassword,
            auth: auth,
            phonenumber: phonenumber
        })
        return res.status(200).json({
            message: 'Create new user success',
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            name: error.name,
        })
    }
}