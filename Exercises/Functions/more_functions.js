

function displayMaillingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city, "," ,state, "," ,zip);

}

displayMaillingLabel("Ray", "3859 No Kap", "Worldly Spring", "Ga", "48304");

function addNumbers(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

addNumbers(2,2);

function displayReceipt(totalDue, amountPaid) {
    console.log(`Total Due: $ ${totalDue}`);
    console.log(`Amount Paid: $ ${amountPaid}`);
    console.log(`Change Due: $ ${totalDue - amountPaid}`);
}

displayReceipt(35, 24);