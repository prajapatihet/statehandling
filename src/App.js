// import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import './App.css';
// import Faqs from './Faqs'
// import btnModule from './Button.module.css';
// import { questions } from './Data/faqs';
import 'react-notifications/lib/notifications.css';

function App() {
  // let [status, setStatus] = useState(false)

  // let [pstatus, setPStatus] = useState(false)

  // let [menuStatus, setMenuStatus] = useState(false)

  // let [modalStatus, setModalStatus] = useState(false)

  // let [showAns, setShowAns] = useState(questions[0].id)

  // let n = ["ram", "rav", "raj", "hello"];

  let createNotification = (t) => {
    return () => {
      // eslint-disable-next-line
      switch (t) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  return (
    <div className="App">
      <NotificationContainer />
      <h2>React Notification</h2>
      <button className='btn btn-info'
        onClick={createNotification('info')}>Info
      </button>
      <hr />
      <button
        onClick={createNotification('success')}>Success
      </button>
      <hr />
      <button
        onClick={createNotification('warning')}>Warning
      </button>
      <hr />
      <button
        onClick={createNotification('error')}>Error
      </button>


      {/* {n.map((item, i) => {
        return (
          <li key={i}>{item}</li>
        )
      })} */}




      {/* <Faqs /> */}
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
