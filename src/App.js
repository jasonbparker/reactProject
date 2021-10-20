import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <input style={{
          width: '200px',
          height: '35px',
          fontSize: '25px',
          color: 'red'
        }}/>
          <p>
          
          Jason Parker's site
        </p>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-flower-blooming-outdoors-royalty-free-image-739387273-1544039749.jpg" width="300px alt="flower/>
       
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=5qap5aO4i9A"
          target="_blank"
          rel="noopener noreferrer"
        >
          music
        </a>
      </header>
    </div>

  )
}

export default App;

