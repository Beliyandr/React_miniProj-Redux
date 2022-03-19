import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });

      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id); //индескное значение комментария который мы хотим поменять

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      console.log(nextComments);

      return {
        ...state,
        comments: nextComments,
      };

    //!Вариант_1
    //  case COMMENT_DELETE:
    //    return {
    //      ...state,
    //      comments: state.comments.filter((res) => res.id !== action.id),
    //    };

    //! Вариант_2
    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex((res) => res.id === id); //индескное значение комментария который мы хотим поменять

        const nextComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];

        return {
          ...state,
          comments: nextComments,
        };
      })();

    default:
      return state;
  }
};
