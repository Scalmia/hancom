import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount((c) => c - 1)}>-1</button>
            <span> {count}번 눌렀어요 </span>
            <button onClick={() => setCount((c) => { console.log("React가 넣어준 c:", c); return c + 1 })}>+1</button>
            <button onClick={() => setCount(0)}>리셋</button>
        </div>
    )
}

export default Counter
