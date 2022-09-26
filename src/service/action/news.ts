import { GET_NEWS_ERROR, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from ".";
import { API_KEY} from "../../utils/api/api";
import { TActionNews} from "../reduce/news";
import { AppThunk, RootState } from "../types";

export const getNews = (country = 'ru', category: string) : AppThunk<void, RootState, unknown, TActionNews> => {
    return (dispatch: (A:TActionNews) => void)=> {
        dispatch({type: GET_NEWS_REQUEST})
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_NEWS_SUCCESS,
                payload: data
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_NEWS_ERROR,
                payload: `${error.message}`
            })
        })

    }
}