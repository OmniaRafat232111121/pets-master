import './App.css';
import Collection from './components/Collections/Collection';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import animal from './assets/animal.png'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Header/>

     <Home 
     bannerImage={animal} 
     desc={'If you have a question about your pet, check out our FAQs'} 
     />
     <Collection />
     <Footer/>
     
    </div>
  );
}

export default App;
