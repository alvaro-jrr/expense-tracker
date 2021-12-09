import Header from "components/Header";
import Balance from "components/Balance";
import ListOfTransactions from "components/ListOfTransactions";
import TransactionForm from "components/TransactionForm";
import { TransactionsContextProvider } from "context/TransactionsContextProvider";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />

			<TransactionsContextProvider>
				<main className="App-main">
					<section className="App-section">
						<h2>Balance</h2>

						<Balance />
					</section>

					<section className="App-section">
						<h2>Transactions</h2>

						<ListOfTransactions />
					</section>

					<section className="App-section">
						<h2>Add Transaction</h2>

						<TransactionForm />
					</section>
				</main>
			</TransactionsContextProvider>
		</div>
	);
};

export default App;
