import gql from "graphql-tag";

export const GET_SEARCHMOVIES = gql`
query MovieSearch($search: String) {
    movieSearch(search: $search) {
      id
      title
      slug
      synopsis
      trailerUrl
      imageUrl
      rating
      UserId
    }
  },
`

export const GET_MOVIEDETAIL = gql`
query MovieDetail($slug: String, $movieDetailId: ID) {
    movieDetail(slug: $slug, id: $movieDetailId) {
      id
      title
      slug
      synopsis
      trailerUrl
      imageUrl
      rating
      UserId
      Genre {
        id
        name
      }
      Casts {
        id
        MovieId
        name
        profilePicture
      }
    }
  }
`