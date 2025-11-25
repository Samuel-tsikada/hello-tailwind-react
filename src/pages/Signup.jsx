import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match!");
    } else if (email && password) {
      // Successful signup (store your “personal” details if needed)
      navigate("/"); // Redirect to home
    } else {
      setError("Please fill in all fields!");
    }
  };

  return (
    <div className="pt-20 flex justify-center items-center h-screen bg-gray-700">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
          Sign Up
        </button>
      </form>
    </div>
  );
}