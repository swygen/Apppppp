// File: App.jsx import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; import Login from "./Login"; import Signup from "./Signup"; import Dashboard from "./Dashboard"; import { useState } from "react";

function App() { const [user, setUser] = useState(null);

return ( <Router> <Routes> <Route path="/" element={<Navigate to="/login" />} /> <Route path="/login" element={<Login setUser={setUser} />} /> <Route path="/signup" element={<Signup />} /> <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} /> </Routes> </Router> ); }

export default App;

// File: Login.jsx import { useState } from "react"; import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleLogin = async (e) => { e.preventDefault(); // Dummy login for demo if (email === "user@example.com" && password === "password123") { setUser({ email }); navigate("/dashboard"); } else { alert("Invalid credentials"); } };

return ( <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl"> <h2 className="text-2xl font-bold mb-4">Login</h2> <form onSubmit={handleLogin}> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-3 border rounded" required /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" required /> <button
type="submit"
className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
> Login </button> </form> </div> ); };

export default Login;

// File: Signup.jsx import { useState } from "react"; import { useNavigate } from "react-router-dom";

const Signup = () => { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const navigate = useNavigate();

const handleSignup = (e) => { e.preventDefault(); // For demo, we'll just redirect after "signing up" alert("Account created successfully"); navigate("/login"); };

return ( <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl"> <h2 className="text-2xl font-bold mb-4">Sign Up</h2> <form onSubmit={handleSignup}> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-3 border rounded" required /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" required /> <button
type="submit"
className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
> Sign Up </button> </form> </div> ); };

export default Signup;

// File: Dashboard.jsx const Dashboard = ({ user }) => { return ( <div className="p-10"> <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}!</h1> <p className="text-gray-700">This is your dashboard.</p> </div> ); };

export default Dashboard;
