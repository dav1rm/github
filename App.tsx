import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GITHUB_TOKEN } from '@env';
import { Routes } from './src/routes';
import AppProvider from './src/hooks';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${GITHUB_TOKEN}`,
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
