import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes } from './src/routes';
import AppProvider from './src/hooks';

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
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
