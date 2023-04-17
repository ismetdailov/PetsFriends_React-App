import { Route, Routes } from 'react-router-dom';
import { Guest } from "./components/Home/GuestHome/Guest";
import Footer from "./components/Footer/footer"
import { Login } from './components/Login/Login'
import { Home } from './components/Home/UserHome/Home'
import { MyProfile } from './components/MyProfile/MyProfile.js'
import "./App.css"
import Test from './components/Home/GuestHome/test';
import { AuthProvider } from './components/context/authContext';
import CreatePost from './components/Posts/CreatePost';
import { Messages } from './components/Messages/Messages';
import AddFriends from './components/AddFriends/AddFriends';
import EditPost from './components/Posts/EditPost';

function App() {
  return (
    <AuthProvider>

      <div className="container">
        <main>
          <Routes>
            <Route path='/' element={<Guest />}></Route>
            {/* <Route path='/login' element={<Login />}></Route> */}
            <Route path='/Test' element={<Test />}></Route>
            <Route path='/Messages' element={<Messages />}></Route>
            <Route path='/AddFriends' element={<AddFriends></AddFriends>}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Create' element={<CreatePost />}></Route>
            <Route path='/MyProfile' element={<MyProfile />}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/Post/Edit/:id' element={<EditPost/>}></Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </AuthProvider>
  );
}




export default App;
