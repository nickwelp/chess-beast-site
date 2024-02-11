import logo from './logo.svg';
import './App.css';
import icon from './adaptive-icon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess Beast</h1>
      </header>
      <div> 
        <p>
          Chess Beast is a chess game that uses an aggressive but optional timer to keep the human player playing at a fast pace.
        </p>
        <p>
          It is a single player game meant to help human players by encouraging them to play at a faster pace and accomplishing more games.
        </p>
        <p>
          Privacy Policy: This game does not collect any personal information. It does not use cookies or any other tracking mechanism.
        </p>
        <img src={icon} style={{maxHeight:"200px"}} className="App-logo" alt="logo" />

      </div>
    </div>
  );
}

export default App;
