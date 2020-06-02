import { TEST } from "../actons/types";

const initialState = {
    test: "Initial State"
}

export default (state = initialState, action) => {
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