import './App.css'
import { Home } from "./pages/Home"
import { Portfolio} from "./pages/Portfolio"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Navbar } from "./pages/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home /> } />
          <Route path = "/About" element = {<About /> } />
          <Route path = "/Portfolio" element = {<Portfolio /> } />
          <Route path = "/Contact" element = {<Contact /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
