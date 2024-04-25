import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Nopage from './components/Nopage';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Functions from './components/Functions';
import Calculate from './function/calculator/Calculate';
import Calculator from './function/calculator/Calculator';
import Login from './components/Login';
import Register from './components/Register';
import { ToastContainer} from "react-toastify";
import Navbar from './components/Navbar';
import Appointment from './components/Appointment';
import List from './components/List';
import View from './components/View';



function App() {
  return (
      <>
      <Navbar />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/register" index element={<Register />} />
          <Route path="/login" index element={<Login />} />
          <Route path="functions" element={<Functions />} />
          <Route path="calculate" element={<Calculate />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="appointment" element={<Appointment /> } />
          <Route path="list" element={<List /> } />
          <Route path="view/:id" element={<View /> } />
          <Route path="*" element={<Nopage />} />
      </Routes>
      <ToastContainer theme="colored"></ToastContainer>

    </>
  );
}

export default App;
