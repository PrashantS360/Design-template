import './App.css';
import About from './components/About';
import Associate from './components/Associate';
import Awards from './components/Awards';
import Blogs from './components/Blogs';
import Course from './components/Course';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Reviews from './components/Reviews';
import Service from './components/Service';
import Success from './components/Success';
import Wedding from './components/Wedding';

function App() {
  return (
    <div className='max-w-[1600px] m-auto'>
      <Navbar />
      <About />
      <div className='w-[90%] border-[1px] border-black m-auto mt-4 mb-12'></div>
      <Associate />
      <Service />
      <Discover />
      <Blogs />
      <Wedding />
      <Offers />
      <Reviews/>
      <Awards/>
      <Success/>
      <Course/>
      <div className="h-[90vh]"></div>
      <Footer/>
    </div>
  );
}

export default App;
