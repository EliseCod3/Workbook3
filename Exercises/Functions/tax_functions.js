
function getSocSecTax(grossPay) {
    let ssTax = (grossPay * 6.2)
    return ssTax;
}

console.log(getSocSecTax(70));

function getMedicareTax(gPay) {
    let medicareTax = (gPay * 1.45)
    return medicareTax;
}

console.log(getMedicareTax(60));