import { useState } from 'react'
import { useEffect } from 'react'

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

const NameForm = () => {
    const [name, setName] = useState('')
    
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>입력된 이름: {name}</p>
        </div>
    )
}

export {NameForm}

const ProductItem = ({ name }) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                <h2>{name}</h2>
            <p>수량: {count}</p>
            </div>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
    )
}

export { ProductItem }

const Hello = () => {
    useEffect(() => {
        console.log("Hello 컴포넌트가 화면에 나타남")} ,[])

    return <p>안녕하세요!</p>
}

export { Hello }


const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return <p>현재 시간: {time}</p>
}

export { Clock }

const Counter2 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Count가 ${count}로 변경됨`)
    }, [count])

    return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
}

export { Counter2 }

const Every = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    useEffect(() => {
        console.log(`(배열 없음, 매번 실행) count=${count}, text=${text}`)
    })

    useEffect(() => {
        console.log(`([count]만 감시) count=${count}로 변경됨`)
    }, [count])

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export { Every }

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export { Users }

const Users2 = () => { 
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error))
    }, [])

    return (
        <ol>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ol>
    )
}

export { Users2 }

const Weather = () => {
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=37.39694874723923&longitude=127.11251734289236&current_weather=true')
        .then ((response) => response.json())
        .then((data) => {
            setWeather(data.current_weather.temperature)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error('Error fetching weather:', error)
            setIsLoading(false)
        })
    }, [])
    // console.log(isLoading, weather)
    return <p> SG타워 기온 : {isLoading ? 'Loading...' : (weather ? weather + '°C' : 'N/A')}</p>
}

export { Weather }

const Weather2 = () => {
    const [weather, setWeather] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.39694874723923&longitude=127.11251734289236&current_weather=true')
                const data = await response.json()
                setWeather(data.current_weather.temperature)
            } catch (error) {
                console.error('Error fetching weather:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchWeather()
    }, [])

    return <p> SG타워 기온 : {isLoading ? 'Loading...' : (weather ? weather + '°C' : 'N/A')}</p>
}

export { Weather2 }