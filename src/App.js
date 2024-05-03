import { useState } from 'react';
import './App.css';

function App() {
  let [status, setStatus] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setStatus(!status)}>Show</button>
      {status ? <p className='para'>Welcome to Page</p> : ''}

    </div>
  );
}

export default App;
