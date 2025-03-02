import { Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Login } from "./pages/Login";
import { LoginEmail } from "./pages/LoginEmail";
import { Produtos } from "./pages/Produtos";
import { Produto } from "./pages/Produto";
import { PainelAdm } from "./pages/PainelAdm";
import { Carrinho } from "./pages/Carrinho";

export const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginEmail" element={<LoginEmail />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Produto" element={<Produto />} />
        <Route path="/PainelAdm" element={<PainelAdm />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
  );
};
