import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="card">
                <div className="count-display">
                    <h1>
                        Count is {count}
                    </h1>
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Increase Count
                </button>


                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count - 1)}
                >
                    Decrease Count
                </button>
            </div>
        </>
    )
}

export default Counter;