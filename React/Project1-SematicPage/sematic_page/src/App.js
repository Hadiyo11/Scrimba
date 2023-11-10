import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fun facts about React!</h1>
        <ul>
          <li>It was released back in 2013</li>
          <li>It was originally created by Jordan Walke.</li>
          <li>It has over 100k starts on GITHUB</li>
          <li>It is mainatained by facebook</li>
          <li>It powers thousands of enterprise apps including mobile apps!</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
