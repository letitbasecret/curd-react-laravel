import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import AddProduct from "./Components/AddProduct";
import Update from "./Components/Update";
import Show from "./Components/Show";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import Search from "./Components/Search";
// import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/show/:id" element={<Show />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
