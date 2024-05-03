import { useState } from 'react';
import './App.css';
import btnModule from './Button.module.css'

function App() {
  let [status, setStatus] = useState(false)

  let [pstatus, setPStatus] = useState(false)

  let [menuStatus, setMenuStatus] = useState(false)
  return (
    <div className="App">
      <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}

      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li>
          <li>About Us</li>
        </ul>
      </div>
      <br /><br />
      <div>
        <input type={pstatus ? 'text' : 'password'} /> <button onClick={() => setPStatus(!pstatus)}>{pstatus ? 'Hide' : 'Show'}</button>
      </div>
      <br />
      <div>
        <button className={btnModule.error}>Error</button>
        <button className={btnModule.warning}>Warning</button>
        <button onClick={() => setStatus(!status)}>{(status ? 'Hide' : 'Show')}</button>
        {status ? <p className='para'>Welcome to Page</p> : ''}
      </div>


    </div>
  );
}

export default App;
