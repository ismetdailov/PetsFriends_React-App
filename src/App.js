import Guest from "./components/Home/GuestHome/Guest";
import Footer from "./components/Footer/footer"
import "./App.css"
function App() {
  return (
    <div className="container">
    <main>
      <Guest />
    </main>
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}

export default App;
