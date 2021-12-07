import React, { useState } from "react";

const Context = React.createContext({});

export const TransactionsContextProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([]);
	const [balance, setBalance] = useState(0);

	return (
		<Context.Provider
			value={{ transactions, setTransactions, balance, setBalance }}
		>
			{children}
		</Context.Provider>
	);
};

export default Context;
