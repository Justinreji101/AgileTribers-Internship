import { useCart } from './CartContext';
import styles from './styles.module.css';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 }
];

export const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button 
            onClick={() => addToCart(product)}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};