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
				<div className="App-wrapper">
					<main className="App-main">
						<div className="main-left">
							<section className="App-section">
								<h2>Balance</h2>

								<Balance />
							</section>
						</div>

						<section className="App-section">
							<h2>Add Transaction</h2>

							<TransactionForm />
						</section>
					</main>

					<aside className="App-aside">
						<h2>Transactions</h2>

						<ListOfTransactions />
					</aside>
				</div>
			</TransactionsContextProvider>
		</div>
	);
};

export default App;
