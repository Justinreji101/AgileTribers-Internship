import { CartProvider } from './CartContext';
import { ProductList } from './ProductList';
import { CartDisplay } from './CartDisplay';
import styles from './styles.module.css';

function App() {
  return (
    <CartProvider>
      <div className={styles.cartContainer}>
        <h1>Shopping Cart</h1>
        <ProductList />
        <CartDisplay />
      </div>
    </CartProvider>
  );
}

export default App;