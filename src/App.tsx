import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Order from "./components/Order.tsx";
import Product from "./components/Product.tsx";
import NotFound from "./components/NotFound.tsx";

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
                      <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/customer">Customer</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/order">Order</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/product">Product</Link>
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
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </Router>
  )
}

export default App
