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

function App() {
  const darkmode = useSelector((state)=>state);
  return (
    <div className="App"
    style={{
      background:darkmode ? 'black' :'',
      color:darkmode ? 'white' :'',
  }}
    >
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
  )
}

export default App
