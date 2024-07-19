// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Genres } from "./components/Genres";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="genres" element={<Genres />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
