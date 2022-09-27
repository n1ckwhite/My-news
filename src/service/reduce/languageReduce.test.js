import { SET_LANGUAGE_EN, SET_LANGUAGE_RU } from "../action";
import { initialState, languageReduce } from "./languageReduce";

describe("checkReduce", () => {
  it("initState", () => {
    expect(languageReduce(undefined, [{}])).toEqual(initialState);
  });
  it("setLanguageRu", () => {
    expect(languageReduce(undefined, [{ type: SET_LANGUAGE_RU }])).toEqual(
      initialState
    );
  });
  it("setLanguageEn", () => {
    expect(languageReduce(undefined, [{ type: SET_LANGUAGE_EN }])).toEqual(
      initialState
    );
  });
});
