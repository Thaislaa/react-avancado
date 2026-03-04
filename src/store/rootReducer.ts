import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import taskReducer from "./slices/tasksSlice"

const rootReducer = combineReducers({
    tasks: taskReducer
});

export const persistedReducer = persistReducer({
    key: "tasks",
    storage
}, rootReducer);