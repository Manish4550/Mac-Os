import { useState } from "react";
import "./app.scss";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import Github from "./component/Window/Github";
import Note from './component/Window/Note'
import Resume from './component/Window/Resume'
import Spotify from './component/Window/Spotify'
import Cli from './component/Window/Cli'




function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
     <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  );
}

export default App;
