import React, {useState, useEffect} from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    const [isOn, setIsOn] = useState(false)

    const toggleLight = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    useEffect(() => {
        document.title = `You have clicked ${count} times`
    })



    return (
        <>
            <h1>Hook Version</h1>
            <h2>Counter</h2>
            <button onClick={incrementCount}>
                I was clicked {count} times.
            </button>

            <h2>Toggle Light</h2>
            <div style={{
            height: '50px',
            width: '50px',
            background: isOn ? 'yellow ': 'grey'
            }} onClick={toggleLight}>
            </div>
        </>
    )
}

export default App