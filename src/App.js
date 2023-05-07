import './App.css';
import NavBar from "./components/NavBar"
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Ack from "./components/Ack";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Feature />
      <Ack />
      <Footer />
    </div>
  );
}

export default App;
