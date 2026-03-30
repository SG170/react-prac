import { useState } from "react";
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  let message = "";

  if (user === "admin" && pass === "1234") {
    message = "Login Successful ✅";
  } else if (user || pass) {
    message = "Invalid Credentials ❌";
  }

  return (
    <div className="card">
      <h2>Login</h2>

      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />

      <p>{message}</p>
    </div>
  );
}

export default Login;