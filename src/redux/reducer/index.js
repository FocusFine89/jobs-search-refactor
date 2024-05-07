import { ADD_TO_PREFERITI, REMOVE_PREFERITI } from "../actions";

const initialState = {
  preferiti: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREFERITI:
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: [...state.preferiti.content, action.payload],
        },
      };

    case REMOVE_PREFERITI:
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: state.preferiti.content.filter(
            (_, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
