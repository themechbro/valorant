import "./App.css";
import Agent from "./Components/Agents/agents";
import Appbar from "./Components/Appbar/appbar";
import Diff from "./Components/Diff/diff";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/hero";
import Latest from "./Components/Latest/latestsection";
import Maps from "./Components/Maps/Maps";
import WerValo from "./Components/Wervalo/wervalo";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Hero></Hero>
      <Latest />
      <Diff />
      <WerValo />
      <Agent />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
