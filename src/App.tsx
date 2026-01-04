import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home';
import { Recipes } from "./pages/Recipes";
import { Recipe } from "./pages/Recipe";
import { ScrollToTop } from "./components/ScrollToTop";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
