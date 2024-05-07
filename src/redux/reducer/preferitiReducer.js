import { ADD_TO_PREFERITI, REMOVE_PREFERITI } from "../actions";

const initialState = {
  content: [],
};

const preferitiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREFERITI:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_PREFERITI:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default preferitiReducer;
