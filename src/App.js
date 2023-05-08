
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/home" element={<Home/>}/> 
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
