import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { store } from "../store"

type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export interface ICard {
  urlToImage: string | null
  url: string,
  title: string,
  description: string,
  publishedAt: string
}

export interface IList {
  list: {
    articles: [ICard]
  }
}

export type AppThunk<R, S, E, A extends Action> = (
    dispatch: ThunkDispatch<S, E, A>,
    getState: () => S,
    extraArgument: E
  ) => R;