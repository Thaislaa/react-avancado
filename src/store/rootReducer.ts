import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import taskReducer from "./slices/tasksSlice"
import repositoriesReducer from "./slices/repositoriesSlices"

const rootReducer = combineReducers({
    tasks: taskReducer,
    repositories: repositoriesReducer
});

export const persistedReducer = persistReducer({
    key: "tasks",
    storage
}, rootReducer);