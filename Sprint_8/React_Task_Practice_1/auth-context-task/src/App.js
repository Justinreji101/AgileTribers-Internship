import { AuthProvider } from './AuthContext';
import { Login } from './Login';
import { Profile } from './Profile';
import styles from './styles.module.css';

function App() {
  return (
    <AuthProvider>
      <div className={styles.app}>
        <h1>Auth Context Demo</h1>
        <Login />
        <Profile />
      </div>
    </AuthProvider>
  );
}

export default App;