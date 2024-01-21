// export const vs const export? 

import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`hello parent ${childName}`)
        alert(`hello + ${childName}`)
        // only ` works with variables, not '
    }

    return (
        <ChildComponent greetHandler={greetParent}></ChildComponent>
    )
    // basically props, but passing in the fucntion? with it being props.greetHandler
    // because that is the argument that is given
    
    // you RETURN the child component, buty ou put the parent component in app.js

}