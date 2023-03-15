
import './App.css';
import  Header from  './Vogo'
import { Route, Routes } from 'react-router-dom';
import Client from './Fetchedinv';
import Page from './Mainpage'
function App() {

  return (
    <div className="App" >
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/investor" element={<Client/>} />
      <Route path="/page" element={<Page/>}/>
      </Routes>    
    </div>
  );
}

export default App;
