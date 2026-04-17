// ✅ AFTER — CreateUser.jsx
import { useState } from 'react';
import { useCreateUser } from '../hooks/useUserQueries';

function CreateUser({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const {
    mutate:    createUser,
    isPending: isCreating,
    isError,
    error,
    isSuccess,
  } = useCreateUser();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(form, {
      onSuccess: (newUser) => {
        setForm({ name: '', email: '', phone: '' });
        onSuccess?.(newUser);
        // ✅ cache auto-invalidated — list refetches automatically
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <button type="submit" disabled={isCreating}>
        {isCreating ? 'Creating...' : 'Create User'}
      </button>

      {isError   && <p style={{ color: 'red' }}>❌ {error.message}</p>}
      {isSuccess && <p style={{ color: 'green' }}>✅ User created!</p>}
    </form>
  );
}

export default CreateUser;