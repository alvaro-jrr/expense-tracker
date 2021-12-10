import React from "react";
import "./styles.css";

const Transaction = ({ amount, type }) => {
	return <li className={`Transaction ${type}`}>{amount}</li>;
};

export default React.memo(Transaction, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id;
});
