//HOMEPAGE JS
document.addEventListener("DOMContentLoaded", function () {
    const exploreAccountsButton = document.querySelector(".cta-button");

    // Function to handle the button click event
    function handleExploreAccountsClick(event) {
        alert("Redirecting to Accounts Page...");
        // You can add code here to navigate to the Accounts page.
        // For example, window.location.href = "accounts.html";
    }

    // Add a click event listener to the "Explore Accounts" button
    exploreAccountsButton.addEventListener("click", handleExploreAccountsClick);
});

//ACCOUNT JS
document.addEventListener("DOMContentLoaded", function () {
    // Sample transaction data (replace with actual data)
    const transactions = [
        { date: "2023-09-01", description: "Deposit", amount: 500.0 },
        { date: "2023-09-05", description: "Withdrawal", amount: -200.0 },
        // Add more transactions here
    ];

    // Function to create a table row for a transaction
    function createTransactionRow(transaction) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
        `;
        return row;
    }

    // Function to display transactions in the table
    function displayTransactions() {
        const transactionTable = document.querySelector(".transaction-history table tbody");

        transactions.forEach((transaction) => {
            const row = createTransactionRow(transaction);
            transactionTable.appendChild(row);
        });
    }

    // Call the function to display transactions
    displayTransactions();
});

//TRANSACTION JS
document.addEventListener("DOMContentLoaded", function () {
    // Sample transaction data (replace with actual data)
    const transactions = [
        { date: "2022-04-02", description: "Deposit", amount: 500.0 },
        { date: "2022-03-05", description: "Withdrawal", amount: -200.0 },
        // Add more transactions here
    ];

    // Function to create a table row for a transaction
    function createTransactionRow(transaction) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
        `;
        return row;
    }

    // Function to display transactions in the table
    function displayTransactions() {
        const transactionList = document.getElementById("transactionList");

        transactions.forEach((transaction) => {
            const row = createTransactionRow(transaction);
            transactionList.appendChild(row);
        });
    }

    // Call the function to display transactions
    displayTransactions();
});


//TRANSFER JS
document.addEventListener("DOMContentLoaded", function () {
    const transferForm = document.getElementById("moneyTransferForm");
    const transferResult = document.getElementById("transferResult");

    transferForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fromAccount = document.getElementById("fromAccount").value;
        const toAccount = document.getElementById("toAccount").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (isNaN(amount) || amount <= 0) {
            transferResult.textContent = "Invalid amount. Please enter a valid amount.";
        } else {
            // Here, you would typically implement the transfer logic to update account balances.
            // For this example, we'll just show a success message.
            transferResult.textContent = `Successfully transferred $${amount} from ${fromAccount} to ${toAccount}.`;
        }
    });
});
