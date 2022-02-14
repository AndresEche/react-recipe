//style
import "./App.css";
//router import
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/create"} element={<Create />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/recipes/:id"} element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
