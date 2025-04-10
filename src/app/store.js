import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './service/productsData'
import { spotlightApi } from './service/spotlightData'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [spotlightApi.reducerPath]: spotlightApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(spotlightApi.middleware),
});

setupListeners(store.dispatch);