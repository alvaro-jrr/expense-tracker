import React, { useState } from "react";

const Context = React.createContext({});

export const TransactionsContextProvider = ({ children }) => {
	const [transactions, setTransactions] = useState(
		localStorage.getItem("lastTransactions")
			? JSON.parse(localStorage.getItem("lastTransactions"))
			: []
	);

	const [balance, setBalance] = useState(
		localStorage.getItem("lastBalance")
			? JSON.parse(localStorage.getItem("lastBalance"))
			: 0
	);

	return (
		<Context.Provider
			value={{ transactions, setTransactions, balance, setBalance }}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
