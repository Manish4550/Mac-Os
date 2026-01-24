import "./app.scss";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import DateTIme from "./component/DateTime";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Dock />
      </main>
    </>
  );
}

export default App;
