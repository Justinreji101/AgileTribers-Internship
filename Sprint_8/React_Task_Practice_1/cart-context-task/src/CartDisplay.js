import { useCart } from './CartContext';
import styles from './styles.module.css';

export const CartDisplay = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className={styles.cartItems}>
      <h2>Your Cart ({cart.length} items)</h2>
      {cart.map(item => (
        <div key={item.id} className={styles.cartItem}>
          <div>
            <h3>{item.name}</h3>
            <p>${item.price} × {item.quantity}</p>
          </div>
          <div className={styles.quantityControls}>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className={styles.btn}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className={styles.btn}
            >
              +
            </button>
            <button 
              onClick={() => removeFromCart(item.id)}
              className={`${styles.btn} ${styles.btnDanger}`}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        Total: ${cartTotal.toFixed(2)}
      </div>
    </div>
  );
};