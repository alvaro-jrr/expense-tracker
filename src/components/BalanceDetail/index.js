import React from "react";
import useTransactions from "hooks/useTransactions";
import "./styles.css";

const BalanceDetail = () => {
	const { transactions } = useTransactions();

	return (
		<table className="BalanceDetail">
			<thead>
				<tr>
					<th>Income</th>
					<th>Outcome</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						{transactions
							.filter(({ type }) => type === "income")
							.reduce((a, { amount }) => {
								return a + amount;
							}, 0)}
					</td>

					<td>
						{transactions
							.filter(({ type }) => type === "outcome")
							.reduce((a, { amount }) => {
								return a + amount;
							}, 0)}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default BalanceDetail;
