import { GET_NEWS_ERROR, GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../action";
import { initialState, newsReducer } from "./news";

const NewsItem = {
  urlToImage: "123",
  url: "123",
  title: "123",
  description: "123",
  publishedAt: "123",
};

const ErrorMessage = {
  message: "123",
};

describe("checkReduce", () => {
  it("initState", () => {
    expect(newsReducer(undefined, [{}])).toEqual(initialState);
  });
  it("NEWS REQUEST", () => {
    expect(newsReducer(undefined, [{ type: GET_NEWS_REQUEST }])).toEqual(
      initialState
    );
  });
  it("NEWS SUCCESS", () => {
    expect(
      newsReducer(undefined, [{ type: GET_NEWS_SUCCESS, payload: [NewsItem] }])
    ).toEqual(initialState);
  });
  it("NEWS ERROR", () => {
    expect(
      newsReducer(undefined, [
        { type: GET_NEWS_ERROR, payload: ErrorMessage.message },
      ])
    ).toEqual(initialState);
  });
});
