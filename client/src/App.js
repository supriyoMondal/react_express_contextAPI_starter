import React, { useContext, useEffect } from 'react'
import { MainContext } from './context/MainContext'


const App = () => {
    const { test, changeTest } = useContext(MainContext);
    useEffect(() => {
        changeTest();
    }, [])
    console.log(test)
    return (
        <div>
            <h1>Hello from react starter</h1>
        </div>
    )
}

export default App
