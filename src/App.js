import { Route, Routes } from 'react-router-dom';
import {Guest} from "./components/Home/GuestHome/Guest";
import Footer from "./components/Footer/footer"
import {Login} from './components/Login/Login'
import {Home} from './components/Home/UserHome/Home'
import {MyProfile} from './components/MyProfile/MyProfile.js'
import "./App.css"
import Test from './components/Home/GuestHome/test';

function App() {
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path='/' element={<Guest />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path='/Test' element={<Test/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/MyProfile' element={<MyProfile/>}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

 


export default App;
