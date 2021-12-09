import React from "react";
import useBalance from "hooks/useBalance";
import useTransactions from "hooks/useTransactions";

const Balance = () => {
	const { transactions } = useTransactions();
	const { balance } = useBalance();

	return (
		<article className="Balance">
			<strong>{balance}</strong>

			<div className="Balance-detail">
				<div>
					Income
					{transactions
						.filter(({ type }) => type === "income")
						.reduce((a, { amount }) => {
							return a + amount;
						}, 0)}
				</div>

				<div>
					Outcome
					{transactions
						.filter(({ type }) => type === "outcome")
						.reduce((a, { amount }) => {
							return a + amount;
						}, 0)}
				</div>
			</div>
		</article>
	);
};

export default Balance;
