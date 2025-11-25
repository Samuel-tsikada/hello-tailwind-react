import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hardcoded personal credentials
  const correctEmail = "youremail@example.com";
  const correctPassword = "mypassword";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      navigate("/"); // Redirect to home page
    } else {
      setError("Incorrect email or password!");
    }
  };

  return (
    <div className="pt-20 flex justify-center items-center h-screen bg-gray-500">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
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
        <button type="submit" className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
          Login
        </button>
      </form>
    </div>
  );
}