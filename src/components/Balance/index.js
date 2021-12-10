import React from "react";
import useBalance from "hooks/useBalance";
import BalanceDetail from "components/BalanceDetail";
import "./styles.css";

const Balance = () => {
	const { balance } = useBalance();

	return (
		<article className="Balance">
			<strong>{balance}</strong>

			<BalanceDetail />
		</article>
	);
};

export default Balance;
