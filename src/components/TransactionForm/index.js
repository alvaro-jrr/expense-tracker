import React from "react";
import { useForm } from "react-hook-form";
import useTransactions from "hooks/useTransactions";
import useBalance from "hooks/useBalance";

const OPTIONS = ["income", "outcome"];

const TransactionForm = () => {
	const { setTransactions } = useTransactions();
	const { setBalance } = useBalance();

	const { register, handleSubmit, reset } = useForm({
		amount: "",
		type: "",
	});

	// actions when form is submitted
	const onSubmit = (transaction) => {
		// add new transaction
		setTransactions((prevTransactions) =>
			prevTransactions.concat(transaction)
		);

		// update balance
		setBalance((prevBalance) => {
			const { amount, type } = transaction;

			const newAmount = type === "income" ? +amount : +amount * -1;

			return prevBalance + newAmount;
		});

		// reset input
		reset({
			amount: "",
		});
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>
				Amount
				<input
					type="number"
					placeholder="Enter an amount (e.g: 200)"
					step="any"
					{...register("amount", {
						required: "An amount is required",
						min: 0,
					})}
				/>
			</label>

			<label>
				Type
				<select
					{...register("type", {
						required: "A transaction type is required",
					})}
				>
					<optgroup label="Type">
						{OPTIONS.map((option, index) => {
							return (
								<option value={option} key={index}>
									{option}
								</option>
							);
						})}
					</optgroup>
				</select>
			</label>

			<button className="btn">Add</button>
		</form>
	);
};

export default TransactionForm;
