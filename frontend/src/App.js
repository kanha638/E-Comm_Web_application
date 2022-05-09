import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Homepage</h1>}></Route>
            <Route path="/add" element={<h1>Add product webpage</h1>}></Route>
            <Route
              path="/update"
              element={<h1>Update product webpage</h1>}
            ></Route>
            <Route path="/Logout" element={<h1>Logout Page</h1>}></Route>
            <Route
              path="/profile"
              element={<h1>Profile Information</h1>}
            ></Route>
          </Route>

          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
