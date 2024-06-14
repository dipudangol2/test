
import { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Login successful');
    } else {
      alert('Login failed: ' + data.message);
    }
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <span>Don&apost have an account?</span>
      <button>
        <Link to={"/signup"}>Signup</Link>
      </button>
    </div>
  );
}

export default Login
