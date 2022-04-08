const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const axios = require('axios');
const Redis = require('ioredis');

const redis = new Redis();

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router.get('/user/movies/:slug/:id', Controller.getUserMoviesDetail)

app.get('/user/search', async (req, res) => {
    try {
        const { search } = req.query

        const moviesSearchCache = await redis.get(`Search-${search}`)

        if (moviesSearchCache) {
            const movies = JSON.parse(moviesSearchCache)
            res.status(200).json(movies)
        } else {
            const { data } = await axios.get(`http://localhost:4002/user/search/?search=${search}`)
            await redis.set(`Search-${search}`, JSON.stringify(data), "EX", 300)
            res.status(200).json(data)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.get('/user/movies/:slug/:id', async (req, res) => {
    try {

        const moviesDetail = await redis.get(`Movies-${req.params.id}`)

        if (moviesDetail) {
            const movies = JSON.parse(moviesDetail)
            res.status(200).json(movies)
        } else {
            const { data } = await axios.get(`http://localhost:4002/user/movies/${req.params.slug}/${req.params.id}`)
            await redis.set(`Movies-${req.params.id}`, JSON.stringify(data), "EX", 300)
            res.status(200).json(data)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.get('/movies', async (req, res) => {
    try {
        const moviesCache = await redis.get('movies')

        if (moviesCache) {
            const movies = JSON.parse(moviesCache)
            res.status(200).json(movies)
        } else {
            const { data } = await axios.get('http://localhost:4002/movies')
            await redis.set('movies', JSON.stringify(data))
            res.status(200).json(data)
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.post('/movies', async (req, res) => {
    try {
        const { UserId } = req.query
        const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body
        const { data } = await axios.post(`http://localhost:4002/movies/?UserId=${UserId}`, req.body)

        res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.put('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { idcast1, idcast2, idcast3, UserId } = req.query
        const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body
        const { data } = await axios.put(`http://localhost:4002/movies/${id}?idcast1=${idcast1}&idcast2=${idcast2}&idcast3=${idcast3}&UserId=${UserId}`, req.body)
        res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.delete('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios.delete(`http://localhost:4002/movies/${id}`)
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
