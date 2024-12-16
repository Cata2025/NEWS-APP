import Home from "./pages/Home";
import Greetings from "./pages/Greetings";
import { Routes, Route } from "react-router";
import NavigationBar from "./components/NavigationBar";
import BooksList from "./pages/BooksList";
import CreateNew from "./pages/CreateNew";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="full">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CreateNew />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/list" element={<BooksList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
