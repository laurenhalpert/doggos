
import '../App.css';

import Home from './Home';
import GuessDoggo from './GuessDoggo';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guess-the-doggo" element={<GuessDoggo />} />
      </Routes>
    
    </div>
  );
}

export default App;
