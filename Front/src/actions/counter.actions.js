import { INCREMENT, DECREMENT } from "../constants/constants";

export function increment(dispatch) {
    dispatch({ type: INCREMENT });
}
export function decrement(dispatch) {
    dispatch({ type: DECREMENT });
}
