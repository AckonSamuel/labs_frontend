import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import addEquipmentReducer from './slices/add-equipment-slice';

const MyMiddlewares = [logger, thunk];

const store = configureStore({
    reducer: {
        addEquipmentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(MyMiddlewares),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;