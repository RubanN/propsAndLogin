import React, { useState, useEffect } from 'react'

const IncrementCount = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    useEffect(() => {
        console.log(count);
    }, [count])
    return (
        <div>
            <button onClick={increment}>increment{count}</button>
            <button onClick={decrement}>decrement{count}</button>

        </div>
    )
}
export default IncrementCount


