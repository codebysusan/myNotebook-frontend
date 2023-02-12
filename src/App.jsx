import "./App.css";
import RoutesFile from "./components/RoutesFile";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <div className="App">
        <RoutesFile />
      </div>
    </NoteState>
  );
}

export default App;
