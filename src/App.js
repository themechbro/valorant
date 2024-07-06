import "./App.css";
import Footer from "./Components/Footer/Footer";
import Appbar from "./Components/Appbar/appbar";
import Main from "./main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgentDeck from "./Components/AgentPage/agentsDeck";
import { Provider } from "react-redux";
import store from "./store";
import ViewAgent from "./Components/AgentPage/viewAgent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Appbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/agents" element={<AgentDeck />}></Route>
            <Route
              path="/agents/:uuid=true/:displayName"
              element={<ViewAgent />}
            ></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
