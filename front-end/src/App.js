import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Carousal from './components/Carousal';
import ClassifiedProducts from './components/ClassifiedProducts';
import DealSection from './components/DealSection';
import Footer from './components/Footer';
import Header from './components/Header';
import LinkSection from './components/LinkSection';
import NewsLetter from './components/NewsLetter';
import SpanHeader from './components/SpanHeader';


function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('isLoggedIn')){
      navigate('/customer')
    }
  },[])


  return (
    <div className=" h-screen font-sans">
      <Header />
      <SpanHeader />
      <LinkSection />
      <Carousal className='h-screen snap-start snap-mandatory w-full' />
      <DealSection className='h-screen w-full snap-center'/>
      <ClassifiedProducts className ='h-screen w-full'/>
      <NewsLetter  />
      <Footer />
    </div>
  );
}

export default App;
