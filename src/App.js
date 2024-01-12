import './App.css';
// process = create a .js file for a component 
// import and use the component within app.js 
// use the component within the html

// the first 'Greet' doesn't actually matter, it's just a variable name
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
     <Greet></Greet>
    </div>
  );
}

export default App;
