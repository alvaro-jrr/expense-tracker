import { useEffect } from "react";
import useGlobalTransactions from "./useGlobalTransactions";

const useTransactions = () => {
	const { transactions, setTransactions } = useGlobalTransactions();

	useEffect(() => {
		localStorage.setItem("lastTransactions", JSON.stringify(transactions));
	}, [transactions]);

	return { transactions, setTransactions };
};

export default useTransactions;
