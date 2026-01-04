import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home';
import { Recipes } from "./pages/Recipes";
import { Recipe } from "./pages/Recipe";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
