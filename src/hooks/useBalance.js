import { useEffect } from "react";
import useGlobalBalance from "./useGlobalBalance";

const useBalance = () => {
	const { balance, setBalance } = useGlobalBalance();

	useEffect(() => {
		localStorage.setItem("lastBalance", balance);
	}, [balance]);

	return { balance, setBalance };
};

export default useBalance;
