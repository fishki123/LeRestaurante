import './App.css';
import Navbar from './components/Navbar'
import MainMenu from "./components/MainMenu";
import DailyMenu from "./components/DailyMenu";
import AboutUs from "./components/AboutUs";
import FooterMenu from "./components/FooterMenu";
function App() {
  return (
    <div className="App">
        <Navbar />
        <MainMenu />
        <DailyMenu />
        <AboutUs />
        <FooterMenu />
    </div>
  );
}

export default App;
