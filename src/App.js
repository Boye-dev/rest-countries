import Navbar from "./components/Navbar";
import { RestCountriesProvider } from "./context/RestCountriesContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <RestCountriesProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/country/:name" element={<Details />} />
          </Routes>
        </RestCountriesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
