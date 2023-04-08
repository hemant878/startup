import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Page from './components/Page';
import BlogPage from './components/BlogPage';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BoltLoader } from "react-awesome-loaders";
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Contact from './components/Contact';
import AllBlog from './components/AllBlog';


function App() {

  const [loading,setLoading] = useState(false)

  useEffect(() => {
  

    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    }, 5000);

  }, []);

  return (
    <div className="App">
     {
        loading ? 
        <div className="load">
        <BoltLoader
          className={"loaderbolt"}
          boltColor={"white"}
          backgroundBlurColor={"white"}
          loading={loading}
        />
        </div>

       :


        <Router>
            <ScrollToTop/>
        <Routes>
        
        <Route path="/" element={<Page/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Blogs" element={<AllBlog/>} />

        <Route path="/four/:id" element={<BlogPage/>} />


        {/* <Route path='/four/:id' component={} /> */}

         
        
        </Routes>
    
      </Router>
    }

    </div>
  );
};

export default App;
