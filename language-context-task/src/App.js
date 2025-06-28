import { LanguageProvider } from './LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { ContentDisplay } from './ContentDisplay';
import styles from './styles.module.css';

function App() {
  return (
    <LanguageProvider>
      <div className={styles.app}>
        <h1>Global Language Selector</h1>
        <LanguageSelector />
        <ContentDisplay />
      </div>
    </LanguageProvider>
  );
}

export default App;