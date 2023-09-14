import { useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => setShowCart(true)

  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
