const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4001
const routes = require('./routes/userRouter');
const { connect } = require('./config/mongodb');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)


connect()
    .then(db => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })

