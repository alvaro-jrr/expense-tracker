import { useContext } from "react";
import Context from "context/TransactionsContextProvider";

const useGlobalTransactions = () => {
	const { transactions, setTransactions } = useContext(Context);

	return { transactions, setTransactions };
};

export default useGlobalTransactions;
