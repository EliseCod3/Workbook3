"use strict";

function parseAndDisplayName(Name) {
    let userName = Name;
    let space = userName.indexOf(" ");
    let firstName = userName.substring(0, space);
    let lastName = userName.substring(space + 1);
    
    console.log(`Name: ${userName}`);
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");