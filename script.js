function searchTXID(){

    const txid = document.getElementById("txidInput").value;

    if(txid === ""){

        alert("Please enter a Transaction ID.");

        return;

    }

    document.getElementById("result").innerHTML = `
        <h2>Searching...</h2>
        <p>Transaction ID: ${txid}</p>
    `;

}
