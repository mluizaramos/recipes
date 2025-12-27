import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home';
import { Recipes } from "./pages/Recipes";
import { RecipeDetails } from "./components/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
