import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Order from "./components/Order.tsx";
import Product from "./components/Product.tsx";

function App() {

  return (
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand logo" href="#">POS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Customer</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/customer' element={<Customer/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='/product' element={<Product/>}/>
            </Routes>
          </div>
        </Router>
  )
}

export default App
