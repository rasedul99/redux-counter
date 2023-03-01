import { DECREMENT, INCREMENT } from "./actionsTypes";
const initialSate = {
  value: 0,
};
const counterReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
  }
};
