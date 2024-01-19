export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={ () => props.greetHandler('WAHOO')}>Greet Parent</button>
        </div>
    )
}
// conversion between two files