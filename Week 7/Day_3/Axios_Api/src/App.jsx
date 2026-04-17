// App.jsx
import { useState } from 'react';
import UserList   from './components/UserList';
import UserDetail from './components/UserDetail';
import CreateUser from './components/createUser';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>

      <div style={{ flex: 1 }}>
        <h1>Users</h1>
        <CreateUser onSuccess={() => setSelectedUserId(null)} />
        <hr />
        <UserList onSelectUser={setSelectedUserId} />
      </div>

      <div style={{ flex: 2 }}>
        {selectedUserId ? (
          <UserDetail userId={selectedUserId} />
        ) : (
          <p>👈 Select a user to view details</p>
        )}
      </div>

    </div>
  );
}

export default App;