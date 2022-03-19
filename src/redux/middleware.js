import { COMMENT_CREATE } from "./types";
import { errorOn } from "./actions";
const badWords = ["козел", "осел"];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        const hadBadWords = badWords.some((res) =>
          action.data.text.includes(res)
        );
        if (hadBadWords) {
          return store.dispatch(errorOn("Уважайте людей"));
        }
      }
      return next(action);
    };
  };
}
