import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import Navbar from "./components/navbar";
import CharactersList from "./pages/charactersList";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
