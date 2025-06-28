import { ThemeProvider } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { Content } from './Content';
import styles from './styles.module.css';

function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <ThemeToggle />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;