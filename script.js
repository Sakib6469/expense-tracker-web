let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if (!desc || !amount) return;

    transactions.push({ desc, amount, type });

    updateUI();
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

function updateUI() {
    let list = document.getElementById("list");
    let balance = 0;

    list.innerHTML = "";

    transactions.forEach((t, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
        ${t.desc} : $${t.amount}
        <button onclick="deleteTransaction(${index})">X</button>
    `;

    if (t.type === "income") {
        li.style.color = "green";
        balance += t.amount;
    } else {
        li.style.color = "red";
        balance -= t.amount;
    }

    list.appendChild(li);
});

    document.getElementById("balance").innerText = balance;
}


