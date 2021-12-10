import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

const Header = () => {
	return (
		<header className="Header">
			<h1>Expense Tracker</h1>

			<a
				className="Header-icon"
				href="https://github.com/alvaro-jrr/expense-tracker"
				target="_blank"
				rel="noreferrer"
				title="Find me on Github"
			>
				<AiFillGithub size="1.5rem" color="#fffffe" />
			</a>
		</header>
	);
};

export default React.memo(Header);
