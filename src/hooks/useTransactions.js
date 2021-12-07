import { useContext } from "react";
import Context from "context/TransactionsContextProvider";

const useTransactions = () => {
	const { transactions, setTransactions } = useContext(Context);

	return { transactions, setTransactions };
};

export default useTransactions;
