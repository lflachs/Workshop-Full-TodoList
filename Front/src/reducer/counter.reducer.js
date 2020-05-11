import { INCREMENT, DECREMENT } from "../constants/constants";

export function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}