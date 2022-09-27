import { SET_LANGUAGE_EN, SET_LANGUAGE_RU } from "../action";


const initialState = {
    language: 'ru'
}


export interface ILanguageState {
    language: string
}

interface ISetRu {
    readonly type: typeof SET_LANGUAGE_RU
}


interface ISetEn {
    readonly type: typeof SET_LANGUAGE_EN
}

export type TActionLanguage = ISetRu | ISetEn

export const languageReduce = (state: ILanguageState = initialState, action: TActionLanguage) => {
    switch(action.type) {
        case SET_LANGUAGE_RU: {
            return {
                ...state,
                language: 'ru'
            }
        }
        case SET_LANGUAGE_EN: {
            return {
                ...state,
                language: 'en'
            }
        }
        default: {
            return state
        }
    }
}