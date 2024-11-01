

import rootReducer from '../reducers';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: rootReducer,
})


interface RootStateTYPE {
    database: {
        SelfInfo: {
            name        : string;
            email       : string;
            phone       : string;
            role        : string;
            avatar?     : string;
        }
    }
}


export type RootState           = RootStateTYPE;
export type AppDispatch         = typeof store.dispatch;