import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes } from './src/routes';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: 'Bearer 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',
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
