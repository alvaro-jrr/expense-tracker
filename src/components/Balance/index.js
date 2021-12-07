import React from "react";
import useBalance from "hooks/useBalance";

const Balance = () => {
	const { balance } = useBalance();

	return (
		<article className="Balance">
			<strong>{balance}</strong>
		</article>
	);
};

export default Balance;
