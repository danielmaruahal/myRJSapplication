import React from 'react'; // import react to run react components (see App() return in App.js, and refer to node_modules)
import logo from './logo.svg';
import './App.css';

// make an additional texts and button with alert after Hello World!
// first letter of function name must be capital!
/* using JSX syntax
this is multi-line comment */ 
{/* another comment style, child comment */}
function Addtext1(props){
  return <div>{props.text1}</div>
}
// simpler text without props in text2, just follow the syntax below, with span failed..
function Addtext2(){
  return <div style={{background: 'green', color: 'white'}}>Hola!</div> // end of line comment
}
//botton with alert
function Button1(){
  return <button onClick={() => alert('Welcome!')}>Click here</button>
}
// main App program 
function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*  HELLO WORLD! for header */}
        <p> 
          Hello World!
        </p>
        <Addtext1 text1="Good morning!" />
        <Addtext2/>
        <Button1/>
        <br>
        </br><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // export default App to be used in other files/modules and to deploy this App itself
