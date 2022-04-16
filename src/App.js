import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/SignUp/Signup';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;