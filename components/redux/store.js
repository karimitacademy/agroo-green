import {configureStore} from '@reduxjs/toolkit'
import {productApi} from './Product'
export const store = configureStore({
    reducer:{
        [productApi.reducerPath]:productApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(productApi.middleware)
})