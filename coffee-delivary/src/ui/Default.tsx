import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { CartContextProvider } from "../hooks/CartContext";

export function Default () {
  return (
    <CartContextProvider>
      <Header />
      <Outlet />
    </CartContextProvider>
  );
}
