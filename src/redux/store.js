import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weateher/weatherReducer';


export const store=configureStore({
    reducer: weatherReducer,
})