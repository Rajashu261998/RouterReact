import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Post from "./components/pages/Post";

function App() {
  let isLogged=true
  let data={
    'st':'User not logged in'
  }
  return (
    <>
      <BrowserRouter>
      <Navbar />
       <Routes>
        {/* <Route path="/" element={<h1>Hello React</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={<Contact />} />

        {/* for creating daynamic link we have to give path as bellow */}
        <Route path="/post/:category" element={<Post />} />
        <Route path="/post/:category/:id" element={<Post />} />
        {/* <Route path="/post/:category" element={<Post />} /> */}
        <Route path="/dashboard" element={ isLogged ? <Dashboard />: <Navigate to="/login" replace state={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<h1>Error 4040 Page not found !</h1>} />

      

       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
