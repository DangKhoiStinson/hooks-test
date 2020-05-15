import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [text_shown, settext_shown] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    // const a= 
    return (
        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
          setCount(count + 1);
          settext_shown(text_shown +"Text is shown,\n");
        }
      }>
        Click me
      </button>
      <br />
      {text_shown && text_shown.split ('\n').map ((item, i) => {return <p key={i}>{item}</p>;})}
    </div>
    );
}

export default App;