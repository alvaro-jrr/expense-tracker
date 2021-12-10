import { useContext } from "react";
import Context from "context/TransactionsContextProvider";

const useGlobalBalance = () => {
	const { balance, setBalance } = useContext(Context);

	return { balance, setBalance };
};

export default useGlobalBalance;
