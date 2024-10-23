import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/countryDetails/countryDetail";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
