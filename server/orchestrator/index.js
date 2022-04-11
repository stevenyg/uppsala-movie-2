const { ApolloServer, gql } = require('apollo-server');
const { default: axios } = require('axios');
const PORT = process.env.PORT || 4000
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.


const typeDefs = gql`

    type User {
        _id:ID
        email:String,
        password:String,
        phoneNumber:String,
        address:String
    }

    type Movie {
        id:ID
        title: String,
        slug: String,
        synopsis:String,
        trailerUrl:String,
        imageUrl:String,
        rating:Int,
        UserId:String,
        Casts:[Cast]
        Genre:Genre
    }

    type Cast {
        id:ID,
        MovieId:Int,
        name:String,
        profilePicture:String,
    }

    type Genre {
        id:ID,
        name:String,
    }

    type Message {
        message : String
    }


    type Query {
        movies: [Movie],
        users:[User],
        user(id:ID):User,
        movieSearch(search:String):[Movie],
        movieDetail(slug:String,id:ID):Movie,
    }

    type Mutation {
        addUser(email:String,password:String,phoneNumber:String,address:String):Message,
        deleteUser(id:String):Message,
        addMovies(UserId:String,title:String, synopsis:String, trailerUrl:String, rating:Int, imageUrl:String, GenreId:Int, name1:String, profilePicture1:String, name2:String, profilePicture2:String, name3:String, profilePicture3:String ):Message
        updateMovies(id:Int,idcast1:Int, idcast2:Int, idcast3:Int,UserId:String,title:String, synopsis:String, trailerUrl:String, rating:Int, imageUrl:String, GenreId:Int, name1:String, profilePicture1:String, name2:String, profilePicture2:String, name3:String, profilePicture3:String ):Message
        deleteMovies(id:Int):Message
    }
`;

const resolvers = {
    Query: {
        movies: async () => {
            const { data: movies } = await axios.get("http://localhost:4002/movies")
            return movies
        },
        movieSearch: async (parents, args) => {
            const { data: movies } = await axios.get(`http://localhost:4002/user/search/?search=${args.search}`)
            return movies
        },
        movieDetail: async (parents, args) => {
            const { data: movies } = await axios.get(`http://localhost:4002/user/movies/${args.slug}/${args.id}`)
            return movies
        },
        users: async () => {
            const { data: users } = await axios.get("http://localhost:4001/users")
            return users
        },
        user: async (parents, args) => {
            const { data: user } = await axios.get(`http://localhost:4001/users/${args.id}`)
            return user
        },
    },
    Mutation: {
        addUser: async (parents, args) => {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `http://localhost:4001/users`,
                    data: {
                        email: args.email,
                        password: args.password,
                        phoneNumber: args.phoneNumber,
                        address: args.address
                    }
                })
                return data
            } catch (error) {
                console.log(error);
            }
        },
        deleteUser: async (parents, args) => {
            try {
                const { data } = await axios({
                    method: 'DELETE',
                    url: `http://localhost:4001/users/${args.id}`
                })
                return data
            } catch (error) {
                console.log(error);
            }
        },
        addMovies: async (parents, args) => {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: `http://localhost:4002/movies/?UserId=${args.UserId}`,
                    data: {
                        title: args.title, synopsis: args.synopsis, trailerUrl: args.trailerUrl, rating: args.rating, imageUrl: args.imageUrl, GenreId: args.GenreId, name1: args.name1, profilePicture1: args.profilePicture1, name2: args.name2, profilePicture2: args.profilePicture2, name3: args.name3, profilePicture3: args.profilePicture3
                    }
                })
                return data
            } catch (error) {
                console.log(error);
            }
        },
        updateMovies: async (parents, args) => {
            try {
                const { data } = await axios({
                    method: 'PUT',
                    url: `http://localhost:4002/movies/${args.id}?idcast1=${args.idcast1}&idcast2=${args.idcast2}&idcast3=${args.idcast3}&UserId=${args.UserId}`,
                    data: {
                        title: args.title, synopsis: args.synopsis, trailerUrl: args.trailerUrl, rating: args.rating, imageUrl: args.imageUrl, GenreId: args.GenreId, name1: args.name1, profilePicture1: args.profilePicture1, name2: args.name2, profilePicture2: args.profilePicture2, name3: args.name3, profilePicture3: args.profilePicture3
                    }
                })
                return data
            } catch (error) {
                console.log(error);
            }
        },
        deleteMovies: async (parents, args) => {
            try {
                const { data } = await axios({
                    method: 'DELETE',
                    url: `http://localhost:4002/movies/${args.id}`
                })
                return data
            } catch (error) {
                console.log(error);
            }
        },
    }

}

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});