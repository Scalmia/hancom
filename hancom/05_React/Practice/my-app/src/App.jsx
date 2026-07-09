import { useState } from 'react'
// import LikeButton from './components/practice2.jsx'
// import { Hello } from './components/practice2.jsx'
// import { Greeting } from './components/practice2.jsx'
// import { Profile } from './components/practice2.jsx'
// import { Card } from './components/practice2.jsx'
// import { Avatar } from './components/practice2.jsx'
// import { Badge } from './components/practice2.jsx'
// import { Alert } from './components/practice2.jsx'
// import { Rating } from './components/practice2.jsx'
// import { Tag } from './components/practice2.jsx'

import { Button } from '@mui/material'
import Counter from './components/practice3.jsx'

const App = () => {
  // const [name, setName] = useState("John")
  // const list = ["React", "Vue", "Angular", "Svelte"]
  return (
    <>
      <Button variant="contained" color="inherit" onClick={() => alert("Button clicked!")}>
        submit
      </Button>
      <Counter />
    </>

    // <> // 여러 기능
    //     <LikeButton />
    //     <Hello />
    //     <input value={name} onChange={(e) => setName(e.target.value)} />
    //     <Greeting name={name} />
    //     <h1>Profile</h1>
    //     <Profile name2="John" job="Developer" />
    //     <Profile name2="Alice" />
    //     <h1>Card</h1>
    //     <Card title="Card 1" content="This is the first card." emoji="💕" />
    //     <Card title="Card 2" content="This is the second card." emoji="🚀" />
    //     <Card />
    //     <h1>Avatar</h1>
    //     <Avatar name="John" online={true} />
    //     <Avatar name="Alice" online={false} />
    //     <h1>Badge</h1>
    //     <Badge text="Primary" type="primary" />
    //     <Badge text="Secondary" type="secondary" />
    //     <h1>Alert</h1>
    //     <Alert text="This is a success alert." type="success" />
    //     <Alert text="This is a warning alert." type="warning" />
    //     <Alert text="This is an error alert." type="error" />
    //     <h1>Rating</h1>
    //     <Rating score={5} />
    //     <Rating score={3} />
    //     <Rating />
    //     <h1>Tag</h1>
    //     <Tag tags={list} />
    // </>
  )
}

export default App