// event handling 

// be careful to not add parenthesis in the onClick, or else it'll activate when it's rendered
// rather than at a specific time
// event contanis all the details about the event
// you can also use it to pass ecpfici values, setting it as a parameter

//52:59


export const ClickHandler = () => {
    const clickHandler = (event, count = 1) => {
        console.log('Button clicked', count, event)
    }
    
    return (

        <div>
            <button onClick={clickHandler}>Do something</button>
            <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
        </div>
    )
}