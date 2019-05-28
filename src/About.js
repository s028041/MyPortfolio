import React, {useState, useEffect} from 'react';
import './App.css';


function About() {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
  return (
    <div>
    <h1>Counter</h1>
    <p>You clicked {count} times</p>
    <button onClick = {() => setCount(count + 1)}>
    Click me
    </button>
    
      
    </div>
  );
}

export default About;