"use strict";

function getSupplier(code) {
    let supplierCode = code;
    let coln = supplierCode.indexOf(":");
    let supplier = supplierCode.substring(0, coln);
    
    console.log(`Supplied by ${supplier}`);
}

function getProductNumber(code) {
    let productNumber = code;
    let coln = productNumber.indexOf(":");
    let dash = productNumber.indexOf("-");
    let productNum = productNumber.substring(coln + 1, dash);

    console.log(`Product numder is: ${productNum}`);
}

function getSize(code) {
    let size = code;
    let dash = size.indexOf("-");
    let productSize = size.substring(dash + 1);

    console.log(`The size of the product is ${productSize}`);
}

//First code
getSupplier("ACME:123-L")
getProductNumber("ACME:123-L")
getSize("ACME:123-L")

//Second code
getSupplier("DI:12345-M")
getProductNumber("DI:12345-M")
getSize("DI:12345-M")

//Third code
getSupplier("ACE:1-12")
getProductNumber("ACE:1-12")
getSize("ACE:1-12")