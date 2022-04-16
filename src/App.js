import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header text="Hello from Props" />
      <div className="container">
        <h2>App UI</h2>
      </div>
    </div>
  );
}

export default App;
