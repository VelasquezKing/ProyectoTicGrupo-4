import { render } from "react-dom";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/login"
import Registro from "./routes/registro";
import Recuperar from "./routes/recuperar";
import Navbar from "./components/navbar";
import HomeInterno from "./routes/homeusuario";
import HomeExterno from "./routes/homeexterno";
import HomeAdmin from "./routes/homeadmin";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />
    <Route path="/recuperar" element={<Recuperar />} />
    <Route path="/navbar" element={<Navbar />} />
    <Route path="/homeInterno" element={<HomeInterno />} />
    <Route path="/homeExterno" element={<HomeExterno />} />
    <Route path="/homeAdmin" element={<HomeAdmin />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
