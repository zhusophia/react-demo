export const Greet = (props) => {
    return (
        // immutable. can not assign props.name wtihin thsi variable
    <div>
    <h1>Hello {props.name}, {props.age}</h1>
        {props.children}
    </div>
    )
}

export default Greet


// name is the thing it finds, i think

/*function Greet() {
    return <h1>Hello Ice {2 + 2}</h1> // this is actually jsx and not html
}

// same thinhg as 
// const Greet = () => { 
//    return <h1>hi</h1>
//}
// the () probably means function, and it's jsut saved to a variable 
// instead of explictily writing 'function'

// classes are basically equivalent to functions? allows for transferability



function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(pen1);

28:04

// information is often immutable -> can't just start assigning variables inside greet. 

*/


