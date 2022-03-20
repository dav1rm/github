import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '~/services/graphql/queries';

interface StorageContextData {
  users: User[];
  loading: boolean;
  updateUsers(users: User[]): Promise<void>;
}

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData,
);

const StorageProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const data = await AsyncStorage.getItem('@Github:users');

      setUsers(data ? JSON.parse(data) : []);
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const updateUsers = useCallback(async (data: User[]) => {
    setUsers(data);
    await AsyncStorage.setItem('@Github:users', JSON.stringify(data));
  }, []);

  return (
    <StorageContext.Provider
      value={{
        users,
        loading,
        updateUsers,
      }}>
      {children}
    </StorageContext.Provider>
  );
};

function useStorage(): StorageContextData {
  const context = useContext(StorageContext);

  return context;
}

export { StorageProvider, useStorage };
