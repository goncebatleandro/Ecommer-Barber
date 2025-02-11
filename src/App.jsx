import './App.css'

function App() {

// Realizaré un ecommerce para una barberia

  return (  

    <>
    {/* Inicio del navbar */}
      <header>
        <nav className='nav-bar'>
          <p>Logo barberia</p>
          <ul className='links'>
            <li className='links-item'>Inicio</li>
            <li className='links-item'>Tienda</li>
            <li className='links-item'>Contacto</li>
          </ul>
          <p>Ícono del carrito (3)</p>
        </nav>
      </header>
      {/* Incio de las secciones */}
      <section>
        <div className='container-cards'>
            <div className='card'>
                  <h2>Producto 1</h2>
                  <h3>Precio: 100$</h3>
                  <button>Comprar</button>
           </div>
           <div className='card'>
                  <h2>Producto 1</h2>
                  <h3>Precio: 100$</h3>
                  <button>Comprar</button>
           </div>
           <div className='card'>
                  <h2>Producto 1</h2>
                  <h3>Precio: 100$</h3>
                  <button>Comprar</button>
           </div>
        </div>
      </section>

    </>


  );
};

export default App
