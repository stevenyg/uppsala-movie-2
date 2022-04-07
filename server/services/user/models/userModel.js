const { getDB } = require('../config/mongodb');

class userModel {
    static async findAll() {
        try {
            const db = getDB()
            const users = await db
                .collection("Users")
                .find()
                .toArray()
            return users
        } catch (error) {
            throw error
        }
    }

    static async findOne(data) {
        try {
            const db = getDB()
            const users = await db
                .collection("Users")
                .findOne(data)
            // .toArray()
            return users
        } catch (error) {
            throw error
        }
    }

    static async insertOne(data) {
        try {
            const db = getDB()
            const users = await db
                .collection("Users")
                .insertOne(data)
            return users
        } catch (error) {
            throw error
        }
    }

    static async deleteOne(data) {
        try {
            const db = getDB()
            const users = await db
                .collection("Users")
                .deleteOne(data)
            return users
        } catch (error) {
            throw error
        }
    }
}

module.exports = userModel