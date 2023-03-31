import logo from './logo.svg';
import './App.css';
import INavbar from './components/INavbar';
import { Routes,Route } from 'react-router-dom';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Aboutme from './Pages/Aboutme';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';



function App() {
  return (
    <div className="App">
      <INavbar/>
      <Routes>
        <Route path="/Aboutme" element ={<Aboutme/>}/>
        <Route path="/Qualifications" element ={<Qualifications/>}/>
        <Route path="/Skills" element ={<Skills/>}/>
        <Route path="/Experience" element ={<Experience/>}/>
        <Route path="/Projects" element ={<Projects/>}/>
        <Route path="/Hobbies" element ={<Hobbies/>}/>
      </Routes>
    </div>
  );
}

export default App;
