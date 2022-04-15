import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import BreakFast from './Components/BreakFast/BreakFast';
import Dinner from './Components/Dinner/Dinner';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import HomeHeader from './Components/HomeHeader/HomeHeader';
import Login from './Components/Login/Login';
import Lunch from './Components/Lunch/Lunch';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Banner></Banner>
       <HomeHeader></HomeHeader>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/breakFast' element={<BreakFast />}></Route>
        <Route path='/dinner' element={<Dinner />}></Route>
        <Route path='/lunch' element={<Lunch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
