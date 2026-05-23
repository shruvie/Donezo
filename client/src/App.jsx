import './App.css'
import Hero from './components/hero-section/hero.jsx';
import Navbar from './components/navbar/navbar.jsx';
import {Route,Routes} from 'react-router-dom';
import Login from './pages/login/login.jsx';
import Userpanel from './components/user-panel/user-panel.jsx';
import Signup from './pages/signup/signup.jsx';
import Onb from './pages/signup/onboarding-screens/onb.jsx';

function App() {

  return (
      <Routes>
        <Route path="/" element={<><Navbar/> <Hero /></>} />
        <Route path="/login" element={<Login />} />
         <Route path="/userpanel" element={<Userpanel />} />
         <Route path="/signup" element={<Signup />} />
         <Route path='/onboarding' element={<Onb/>}/>
      </Routes>
  )
}

export default App;
