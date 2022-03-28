import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {userName, userReducer} from './userReducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistUserConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: [
    'user',
    'settings',
    'isFirstTime',
    'isSigned',
    'data',
    'token',
    'userId',
  ],
};

const rootReducer = combineReducers({
  [userName]: persistReducer(persistUserConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
