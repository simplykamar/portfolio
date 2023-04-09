import './App.css'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'
import Particle from './components/Particles/Particles'
import Hobby from './components/Hobby/Hobby'
import Project from './components/Project/Project'
import About from './components/About/About'
import Slider from './components/Certificates/Slider'
import Skills from './components/Skills/Skills'
import {useSelector,useDispatch} from 'react-redux';
import {useEffect,useState} from 'react';
import { Rings  } from 'react-loader-spinner'
function App() {
  const darkmode = useSelector((state)=>state);
  const [loaded,setLoaded] = useState(false);
  useEffect(()=>{
    let timer = setTimeout(()=>setLoaded(true),5000);
    return ()=>{
      clearTimeout(timer);
    };
  },[])
  return (
    <div className="App"
    style={{
      background:darkmode ? 'black' :'',
      color:darkmode ? 'white' :'',
  }}
    >
    { loaded ?<div>
                <Particle/>
                <Intro/>
                <Services/>
                <Project/>
                <Skills/>
                <Slider/>
                <Hobby/>
                <About/>
                <Work/>
                <Footer/>
              </div>
    :
        <div className="d-flex justify-content-center align-items-center vh-100"><Rings color="#FCA61F"/></div>
  }
    </div>

  )
}

export default App
