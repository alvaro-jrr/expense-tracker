import React from "react";

const Transaction = ({ amount, type }) => {
	return <li className={type}>{amount}</li>;
};

export default React.memo(Transaction, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id;
});
