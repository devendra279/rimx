import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = createHttpLink({
  uri: 'http://your-backend.com/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://your-backend.com/graphql',
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  ),
  cache: new InMemoryCache(),
});

// Wrap your app with ApolloProvider
<ApolloProvider client={client}>
  <App />
</ApolloProvider>