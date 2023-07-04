import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function State() {
	const location = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(location.state.userdata);
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		const fetchOnlineUsers = async () => {
			axios.get("http://localhost:3002/state").then((response) => {
				const userList = response.data.filter((obj) => obj.uid !== user.id);
				setOnlineUsers(userList);
			});
		};

		fetchOnlineUsers();
	}, []);

	const handleClick = () => {
		const id = user.id;
		axios
			.post("http://localhost:3001/logout", { id })
			.then((response) => {
				if (response.data.success) {
					navigate("/");
				} else {
					alert("Unable to logout");
				}
			})
			.catch((error) => {
				console.error("Logout Failed failed:", error);
			});
	};

	return (
		<div>
			<h3>Hi, {user.name} you are logged in</h3>
			<button onClick={handleClick}>Logout</button>
			<h1>Here are other users who are online</h1>
			<ul>
				{onlineUsers.map((user) => (
					<li key={user.uid}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default State;
