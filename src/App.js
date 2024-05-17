// import { useState } from 'react';
import './App.css';
// import btnModule from './Button.module.css';
// import { questions } from './Data/faqs';

function App() {
  // let [status, setStatus] = useState(false)

  // let [pstatus, setPStatus] = useState(false)

  // let [menuStatus, setMenuStatus] = useState(false)

  // let [modalStatus, setModalStatus] = useState(false)

  // let [showAns, setShowAns] = useState(questions[0].id)
  return (
    <div className="App">
      {/* <div>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className='faqouter'>

          {questions.map((faqItems, i) => {
            return (
              <div className='faqitems'>
                <h2 onClick={() => setShowAns(faqItems.id)}>{faqItems.question}</h2>
                <p className={showAns === faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
              </div>
            )
          })}

        </div>
      </div>
      <div>
        <button className='en' onClick={() => setModalStatus(true)}>Enquire Now</button>
      </div>

      <br />
      <div onClick={() => setModalStatus(false)} className={`modalOverlay ${modalStatus ? 'modalShow' : ''}`} />
      <div className={`modalDiv ${modalStatus ? 'showModalDiv' : ''}`}>
        <h1>Enquire Now <span onClick={() => setModalStatus(false)}>&times;</span></h1>
      </div>
      <br />
      <div>
        <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
          {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}

        </button></div>

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
      </div> */}


    </div>
  );
}

export default App;
