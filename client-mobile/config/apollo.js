import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://f82b-2001-448a-1068-18d0-7db3-2400-863f-b85c.ngrok.io',
    cache: new InMemoryCache()
});

export default client