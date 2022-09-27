import { combineReducers } from "redux";
import { languageReduce } from "./languageReduce";
import { newsReducer } from "./news";

export const rootReducer = combineReducers({
    news: newsReducer,
    language: languageReduce
})