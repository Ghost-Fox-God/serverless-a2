import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [location, setLocation] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3003/register", { name, password, email, location })
			.then((response) => {
				console.log(response.data);
				console.log(response.status);
				navigate("/");
			})
			.catch((error) => {
				console.error("Registration failed:", error);
			});
	};

	const handleClick = () => {
		navigate("/");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
				<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
				<button type="submit">Register</button>
			</form>
			<a href="/login" onClick={handleClick}>
				Already have an account go to login
			</a>
		</div>
	);
}

export default Registration;
