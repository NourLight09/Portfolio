import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useLayoutEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './App.css'; 

// Définition des composants en Chargement Différé (Lazy Loading)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Projectdetail = lazy(() => import('./pages/Projectdetail'));
const Competences = lazy(() => import('./pages/Competences'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Blogdetail = lazy(() => import('./pages/Blogdetail'));
const NotFound = lazy(() => import('./pages/NotFound'));


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false); 
  
  const loaderDuration = 2000; 

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (hasLoadedOnce) {
        setLoading(false); 
        return; 
    }

    const timer = setTimeout(() => {
      setLoading(false);
      setHasLoadedOnce(true); 
    }, loaderDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]); 

  const showLoader = loading && !hasLoadedOnce;

  return (
    <>
      {showLoader && <Loader isLoading={loading} />}
      
      <div className="min-h-screen bg-[#111] text-slate-100 ">
        <div className="relative z-10">
          
          <Navbar />

          {/* 🚨 CORRECTION : Suppression de className="mt-10" */}
          <main> 
            <Suspense fallback={
                <div className="flex justify-center items-center h-[50vh] text-[#7cf7ad]">
                    Chargement du contenu...
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/compétences" element={<Competences />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projets" element={<Projects />} />
                    <Route path="/projet/:id" element={<Projectdetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<Blogdetail />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;