import React, { useReducer, createContext } from 'react';
import reducer from './reducer';
import { TEST } from './types';

const initialState = {
    test: "initial State"
}

export const MainContext = createContext(initialState);
export const MainContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function changeTest() {
        dispatch({ type: TEST, payload: { text: "state changed" } })
    }

    return (
        <MainContext.Provider value={{
            ...state,
            changeTest
        }}>
            {children}
        </MainContext.Provider>
    )
}
