let transactions = [];

fetch("data/mockData.json")
    .then(response => response.json())
    .then(data => {
        transactions = data;
    });

function searchTXID() {

    const txid = document
        .getElementById("txidInput")
        .value
        .trim()
        .toUpperCase();

    const result = transactions.find(
        tx => tx.txid === txid
    );

    if (!result) {

        document.getElementById("result").innerHTML = `
            <h2>Transaction Not Found</h2>
            <p>No record exists for <strong>${txid}</strong>.</p>
        `;

        return;
    }

    document.getElementById("result").innerHTML = `

        <h2>${result.txid}</h2>

        <p><strong>Status:</strong> ${result.status}</p>

        <p><strong>Network:</strong> ${result.network}</p>

        <p><strong>Asset:</strong> ${result.asset}</p>

        <p><strong>Amount:</strong> ${result.amount}</p>

        <p><strong>Confirmations:</strong> ${result.confirmations}</p>

        <p><strong>Risk:</strong> ${result.risk}</p>

        <p><strong>Wallet:</strong> ${result.wallet}</p>

        <hr>

        <p>${result.note}</p>

    `;
}
