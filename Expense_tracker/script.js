let expenses = [];

document.getElementById("expense-form").addEventListener("submit", function(e){

    e.preventDefault();

    const des = document.getElementById("des").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;

    const expense = {
        des : des,
        amount : amount,
        date : date
    };

    expenses.push(expense);
    displayExpenses();

    this.reset();
    
});

function displayExpenses(){
    const list = document.getElementById("expense-list");

    list.innerHTML = "";

    expenses.forEach((expense) => {
        const item = document.createElement("li");
        item.innerText = `${expense.des} - ${expense.amount} - ${expense.date}`;

        list.appendChild(item);
    });
    
}