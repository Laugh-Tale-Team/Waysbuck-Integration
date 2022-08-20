// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from './pages/Detail';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Landing from './pages/Landing';
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";
import IncomeTransaction from "./pages/IncomeTransaction";
import Profile from "./pages/Profile";
import Cart from './pages/Cart';
import './assets/styles.css';
import { useContext } from "react";

// const [state] = (useContext);
// let isLogin = state.isLogin
// let isAdmin = 

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/product/:id" element={<Detail />}/>
            <Route exact path="/admin" element={<IncomeTransaction />}/>
            <Route exact path="/add-product" element={<AddProduct />}/>
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/add-toping" element={<AddTopping />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
