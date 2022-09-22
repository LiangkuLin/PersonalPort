import './App.css';
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import HeaderBar from "./HeaderBar/HeaderBar.jsx"
import About from "../src/About/About"
import Welcome from './Welcome/Welcome';
import Works from './Works/Works';
import myData from './data.json';
import {AnimatePresence} from 'framer-motion';
import WorksPage from './Works/WorksPage';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <HeaderBar/>
        <AnimatedRouter/>
       </BrowserRouter>
    </div>
  );
}

export default App;


function AnimatedRouter(){
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/works' element={<Works/>}/>
              <Route path='/worksPage' element={<WorksPage/>}/>
      </Routes>
    </AnimatePresence>
  )
}
