import { TEST } from "./types";


export default (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TEST:
            return {
                ...state,
                test: payload.text
            }

        default:
            return state;
    }
}