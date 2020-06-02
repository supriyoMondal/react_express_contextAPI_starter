import { TEST } from "./types"

export const changeState = () => dispatch => {
    dispatch({
        type: TEST,
        payload: { text: "state changed" }
    })
}