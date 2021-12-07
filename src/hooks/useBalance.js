import { useContext } from "react";
import Context from "context/TransactionsContextProvider";

const useBalance = () => {
	const { balance, setBalance } = useContext(Context);

	return { balance, setBalance };
};

export default useBalance;
