const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const dbName = "p2-challenge-2"
let db


async function connect() {
    await client.connect()
    console.log('Connect succesful');
    db = client.db(dbName)
    return db
}

function getDB() {
    return db
}

module.exports = { connect, getDB }