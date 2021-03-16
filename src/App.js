import logo from "./logo.svg";
import "./App.css";

function App() {
  const sendNotification = () => {
    window.electron.notification.send("hello from render process");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React / Electron</p>
        <button onClick={sendNotification}>Send Notification</button>
      </header>
    </div>
  );
}

export default App;
