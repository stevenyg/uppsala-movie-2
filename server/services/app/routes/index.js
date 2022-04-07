const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller');


router.get('/user/search', Controller.searchMovies)
router.get('/user/movies/:slug/:id', Controller.getUserMoviesDetail)
router.post('/register', Controller.register)
router.get('/movies', Controller.getMovies)
router.post('/movies', Controller.addMovies)
router.put('/movies/:id/', Controller.updateMovies)
router.delete('/movies/:id', Controller.deleteMovie)


module.exports = router