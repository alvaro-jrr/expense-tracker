import React from "react";
import useTransactions from "hooks/useTransactions";
import Transaction from "components/Transaction";

const ListOfTransactions = () => {
	const { transactions } = useTransactions();

	return transactions.length ? (
		<article className="ListOfTransactions">
			<ul>
				{transactions.map((transaction, index) => {
					return (
						<Transaction key={index} id={index} {...transaction} />
					);
				})}
			</ul>
		</article>
	) : (
		<>
			<span>Nothing to show here yet... add a transaction!</span>
		</>
	);
};

export default ListOfTransactions;
