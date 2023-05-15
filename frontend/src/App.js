import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
import "./App.css";

// const ENDPOINT="http://localhost:4500/";
// const socket= socketIO(ENDPOINT,{transports:['websocket']});
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Join/>}></Route>
          <Route exact path="/chat" element={<Chat/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
