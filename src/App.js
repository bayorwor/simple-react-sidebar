import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import MySidebar from "./Components/MySidebar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Course from "./screens/Course";
import Employee from "./screens/Employee";
import Free from "./screens/Free";
import Home from "./screens/Home";
import Results from "./screens/Results";
import Settings from "./screens/Settings";
import Students from "./screens/Students";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <MySidebar />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/employee" component={Employee} />
          <Route path="/student" component={Students} />
          <Route path="/course" component={Course} />
          <Route path="/free" component={Free} />
          <Route path="/result" component={Results} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
