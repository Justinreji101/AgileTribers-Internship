import { UserProvider } from './UserContext';
import { UserProfile } from './UserProfile';
import { EditUser } from './EditUser';

function App() {
  return (
    <UserProvider>
      <div style={{ padding: '30px' }}>
        <h1>User Context Demo</h1>
        <UserProfile />
        <EditUser />
      </div>
    </UserProvider>
  );
}

export default App;