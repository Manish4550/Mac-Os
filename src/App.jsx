import "./app.scss";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import DateTIme from "./component/DateTime";
import MacWindow from "./component/Window/MacWindow";


function App() {
  return (
    <>
      <main>
        <Nav />
        <Dock />
        <MacWindow>

          <h1> hello</h1>
        </MacWindow>
      </main>
    </>
  );
}

export default App;
