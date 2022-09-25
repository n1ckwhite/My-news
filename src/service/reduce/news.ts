const initialState = {
    news: []
}

export interface INews {
    news: Array<Object>
}

export const newsReducer = (state: INews = initialState, action: any) => {
    switch(action.type) {
        case 'GET': {
            return {
                ...state,
                news: [action.payload]
            }
        }
        default: {
            return state
        }
    }
}