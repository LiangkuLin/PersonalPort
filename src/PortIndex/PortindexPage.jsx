import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import HeaderBar from "../HeaderBar/HeaderBar";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Works from "../Works/Works";
import WorksPage from "../Works/WorksPage";
import {AnimatePresence} from 'framer-motion';
import { Outlet } from "react-router-dom";
import ContactLayout from "../ContactPage/ContactLayout";

function PortIndex() {
    return (
      <div className="App">
         <BrowserRouter>
          <AnimatedRouter/>
         </BrowserRouter>
      </div>
    );
  }
  
  export default PortIndex;
  
  
  function HeadBarLayout (){
    return (
        <>  <HeaderBar/><Outlet/></>
    )
  }


  function AnimatedRouter(){
    const location = useLocation();
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Welcome/>}/>
            <Route element={<HeadBarLayout/>}>
                <Route path='/about' element={<About/>}/>
                <Route path='/works' element={<Works/>}/>
                <Route path='/worksPage' element={<WorksPage/>}/>
                <Route path='/contact' element={<ContactLayout/>}/>
            </Route>
        </Routes>
      </AnimatePresence>
    )
  }


  