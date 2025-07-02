import "./App.css";
import Clicker from "./Clicker";

function App() {
  return (
    <div>
      <Clicker message="HI!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" />
    </div>
  );
}

export default App;
