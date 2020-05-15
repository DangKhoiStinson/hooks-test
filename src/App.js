import React,{ useState, useEffect } from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  const [text_shown,settext_shown] =useState('');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
          setCount(count + 1);
          settext_shown(text_shown + 'Text is shown, ');
        }
      }>
        Click me
      </button>
      <br />
      <p>{text_shown}</p>
    </div>
  );
}
  
export default App;
