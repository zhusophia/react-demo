export const NameList = () => {
    const names = ['Sop', 'Ri', 'Ric']
    
    return (
        <div>
            {
                names.map((name) => {
                    return <h2 key={name}>{name}</h2>
                } )
            }
        </div>

    )
}

// map calls the same function for every element in the array 
// key doesn't change the front, it just makes it more efficent for the backend? 