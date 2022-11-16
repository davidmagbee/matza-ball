import logo from './party-david.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://vercel.com/guides/deploying-react-with-vercel#vercel-for-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy via Vercel using Git
        </a>
      </header>
    </div>
  );
}

export default App;
