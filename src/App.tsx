import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home';
import { Recipes } from "./pages/Recipes";
import { RecipeDetails } from "./components/RecipeDetails";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
