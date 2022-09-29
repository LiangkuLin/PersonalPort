import './App.css';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import HeaderBar from "./HeaderBar/HeaderBar.jsx"
import About from "../src/About/About"
import Welcome from './Welcome/Welcome';
import Works from './Works/Works';
import {AnimatePresence} from 'framer-motion';
import WorksPage from './Works/WorksPage';
import PortIndex from './PortIndex/PortindexPage';


function App() {
  return (
    <PortIndex/>
  );
}

export default App;


