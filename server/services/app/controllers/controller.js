const { User, Movie, Cast, Genre, sequelize } = require('../models/index');
const { Op } = require("sequelize");

class Controller {

    static async register(req, res, next) {
        const { email, password, phoneNumber, address } = req.body
        try {
            const data = await User.create({ email, password, role: 'Admin', phoneNumber, address })
            res.status(201).json({ message: 'User Created' })

        } catch (error) {
            next(error)
        }
    }

    static async searchMovies(req, res, next) {
        try {
            const { search } = req.query

            const movies = await Movie.findAll({
                where: {
                    title: {
                        [Op.iLike]: `%${search}%`,
                    }
                }
            })
            res.status(200).json(movies)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getUserMoviesDetail(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                include: [
                    { model: Cast },
                    { model: Genre }
                ],
                where: {
                    id
                }
            })

            if (!movie) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            res.status(200).json(movie)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async addMovies(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body
            const { UserId } = req.query
            const slug = title.split(' ').join('-')

            const movieCheck = await Movie.findOne({ where: { title } })

            if (movieCheck) {
                throw {
                    code: 400,
                    name: "Bad Request",
                    message: "Movie Already Exists"
                }
            }

            const movie = await Movie.create({ title, slug, rating, synopsis, trailerUrl, imageUrl, GenreId, UserId }, { transaction: t })

            // if (name1 !== undefined) {
            const cast1 = await Cast.create({ MovieId: movie.id, name: name1, profilePicture: profilePicture1 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }
            // if (name2 !== undefined) {
            const cast2 = await Cast.create({ MovieId: movie.id, name: name2, profilePicture: profilePicture2 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }
            // if (name3 !== undefined) {
            const cast3 = await Cast.create({ MovieId: movie.id, name: name3, profilePicture: profilePicture3 }, { transaction: t })
            // } else {
            //     const cast = await Cast.create({ MovieId: movie.id, name: "etc", profilePicture: "" }, { transaction: t })
            // }
            await t.commit();
            res.status(201).json({ message: "Movie Added" })

        } catch (error) {
            console.log(error);
            await t.rollback()
            next(error)
        }
    }

    static async updateMovies(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const { id } = req.params
            const { idcast1, idcast2, idcast3, UserId } = req.query
            const { title, synopsis, trailerUrl, rating, imageUrl, GenreId, name1, profilePicture1, name2, profilePicture2, name3, profilePicture3 } = req.body

            const slug = title.split(' ').join('-')

            const movieCheck = await Movie.findByPk(id)

            if (!movieCheck) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            const movie = await Movie.update({ title, slug, rating, synopsis, trailerUrl, imageUrl, GenreId, UserId }, { where: { id } }, { transaction: t })

            // if (name1 !== undefined) {
            const cast1 = await Cast.update({ MovieId: movie.id, name: name1, profilePicture: profilePicture1 }, { where: { id: idcast1 } }, { transaction: t })
            // }

            // if (name2 !== undefined) {
            const cast2 = await Cast.update({ MovieId: movie.id, name: name2, profilePicture: profilePicture2 }, { where: { id: idcast2 } }, { transaction: t })
            // }

            // if (name3 !== undefined) {
            const cast3 = await Cast.update({ MovieId: movie.id, name: name3, profilePicture: profilePicture3 }, { where: { id: idcast3 } }, { transaction: t })
            // }

            await t.commit();
            res.status(200).json({ message: "Movies Updated" })

        } catch (error) {
            console.log(error);
            await t.rollback()
            next(error)
        }
    }

    static async getMovies(req, res, next) {
        try {
            const movies = await Movie.findAll({
                include: {
                    model: Cast
                }
            })

            res.status(200).json(movies)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async deleteMovie(req, res, next) {
        try {
            const { id } = req.params

            const movie = await Movie.findByPk(req.params.id)

            if (!movie) {
                throw {
                    code: 404,
                    name: "NotFound",
                    message: "Movie Not Found"
                }
            }

            const response = await Movie.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({ message: `Movie ${movie.id} deleted` })

        } catch (error) {
            console.log(error);
            next(error)
        }
    }



}

module.exports = Controller