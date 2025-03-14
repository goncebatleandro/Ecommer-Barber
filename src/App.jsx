import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemDetail from './components/ItemDetail/ItemDetail';

function App(greetings) {
  return (  
    <>
    {/* <Navbar/>
    <ItemListContainer greetings="Bienvenidos a Aviles-Barber"/> */}
        <BrowserRouter> 
        <Navbar/>
        
        <Routes>

          <Route path="/" element={<ItemListContainer/>}  />
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}  />
          <Route path="/detalle/:id" element={<ItemDetail/>}  />

        </Routes>
        

        </BrowserRouter>
    </>


  );
};

export default App
