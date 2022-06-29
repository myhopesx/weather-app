import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CountryProvider } from "./context/CountryContext";
import { WeatherProvider } from "./context/WeatherContext";
import About from "./pages/About";

function App() {
  return (
    <WeatherProvider>
      <CountryProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CountryProvider>
    </WeatherProvider>
  );
}

export default App;
