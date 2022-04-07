// if (process.env.NODE_ENV !== "production") {
//     require('dotenv').config();
// }

const express = require('express')
const app = express()
const port = process.env.PORT || 4002
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})