import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./state/CartContext";
import { UserProgressContextProvider } from "./state/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <>
          <Header />
          <Meals />
          <Cart />
        </>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
