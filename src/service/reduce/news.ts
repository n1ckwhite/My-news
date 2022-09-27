import { GET_NEWS_ERROR, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../action";

export const initialState = {
  news: [],
  error: "",
  pending: false,
};

export interface INews {
  news: Array<Object>;
  error: string;
  pending: boolean;
}


export interface IGetRequest {
    readonly type: typeof GET_NEWS_REQUEST,
}


export interface IGetSuccess {
    readonly type: typeof GET_NEWS_SUCCESS,
    payload: Array<Object>
}

export interface IGetError {
    readonly type: typeof GET_NEWS_ERROR,
    payload: string
}

export type TActionNews = IGetRequest | IGetSuccess | IGetError | any


export const newsReducer = (state: INews = initialState, action: TActionNews) => {
  switch (action.type) {
    case GET_NEWS_REQUEST: {
      return {
        ...state,
        pending: true,
        news: [...state.news]
      };
    }
    case GET_NEWS_SUCCESS: {
        return {
            ...state,
            pending: state.pending,
            news: [action.payload]
        }
    }
    case GET_NEWS_ERROR: {
        return {
            ...state,
            pending: state.pending,
            error: `${action.payload}`
        }
    }
    default: {
      return state;
    }
  }
};
