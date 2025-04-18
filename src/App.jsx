import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home     from './pages/Home.jsx';
import About    from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact  from './pages/Contact.jsx';
import Images  from './pages/Images.jsx';
import Donate from './pages/Donate.jsx';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-fg">
      <Header/>
        <main className="flex-1 pt-[72px]">
          <Routes>
            <Route path="/"         element={<Home/>}/>
            <Route path="/about"    element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/images"  element={<Images/>}/>
            <Route path="/donate"  element={<Donate/>}/> 
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}
