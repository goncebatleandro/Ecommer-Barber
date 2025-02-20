import './App.css';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function App(greetings) {
  return (  
    <>
    <Navbar/>
    <ItemListContainer greetings="Bienvenidos a Aviles-Barber"/>
    {/* <Contador/> */}
    </>


  );
};

export default App
