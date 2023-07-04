import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3001/login", { email, password })
			.then((response) => {
				if (response.data.success) {
					console.log(response.data.userdata);
					navigate("/state", { state: { userdata: response.data.userdata } });
				} else {
					alert("Invalid Credentials");
				}
			})
			.catch((error) => {
				console.error("Login failed:", error);
			});
	};
	const handleClick = () => {
		navigate("/register");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">Login</button>
			</form>
			<a href="/register" onClick={handleClick}>
				Do not have an account go to Registration
			</a>
		</>
	);
}

export default Login;
