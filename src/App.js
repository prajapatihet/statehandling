import { useState } from 'react';
import './App.css';
import btnModule from './Button.module.css'

function App() {
  let [status, setStatus] = useState(false)
  return (
    <div className="App">
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Warning</button>
      <button onClick={() => setStatus(!status)}>{(status ? 'Hide' : 'Show')}</button>
      {status ? <p className='para'>Welcome to Page</p> : ''}

    </div>
  );
}

export default App;
