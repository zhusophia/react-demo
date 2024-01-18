import './App.css';
// process = create a .js file for a component 
// import and use the component within app.js 
// use the component within the html

// the first 'Greet' doesn't actually matter, it's just a variable name
// <greet></greet> = <greet />

// props = optional input that commands accept (so think of it like an variable that takes input)
// makes things dynamic 

import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
     <Greet name ='Bruce'/>
     <Greet name = "Wildons" age = "25"> 
     <button>Action</button>
     </Greet>
     <Greet name = "test" age = "hello">
      <p>This is children props</p>
     </Greet>
    </div>
  );
}

export default App;
