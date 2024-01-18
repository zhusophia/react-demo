// props vs state
// props are NOT mutable (think of them as function parameters), while states are mutable (creating a variable within the function)

// you can have unused parameters but not unused variables 
// you can only return one thing. so, you can wrap it with div 

import { useState } from 'react'

// message is a variable, setMesasge is a function that CHANGES the variable (or the state, in this case)
// a variable that is maintained inside of a component 
// hooks are things that let you 'access' react special features 

export const Message = () => {
    const [message, setMessage] = useState('Welcome Visitor')
    return (
    <div>
        <h1>{message}</h1>
        <button onClick={() => setMessage('Thank you for subscribing.')}>Subscribe</button>
    </div>
    )
}

export default Message

// 47:43