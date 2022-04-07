const userModel = require('../models/userModel');
const mongodb = require('mongodb');

class userController {
    static async getUser(req, res) {
        try {
            const users = await userModel.findAll()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ "message": "internal server error" })
        }
    }

    static async getUserById(req, res) {
        try {
            const { id } = req.params
            const users = await userModel.findOne({ _id: new mongodb.ObjectID(id) })
            res.status(200).json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json({ "message": "internal server error" })
        }
    }

    static async insertUser(req, res) {
        try {
            const { email, password, role, phoneNumber, address } = req.body

            const users = await userModel.insertOne({ email, password, role: "Customer", phoneNumber, address })
            res.status(201).json({ "message": "User Created" })
        } catch (error) {
            res.status(500).json({ "message": "internal server error" })
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params

            const users = await userModel.deleteOne({ _id: new mongodb.ObjectID(id) })
            res.status(201).json({ "message": "User Deleted" })
        } catch (error) {
            console.log(error);
            res.status(500).json({ "message": "internal server error" })
        }
    }
}

module.exports = userController