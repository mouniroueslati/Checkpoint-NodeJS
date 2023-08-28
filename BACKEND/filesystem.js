const fs = require("fs");

fs.readFile("./welcome.txt", (err, data) => {
    console.log(data);
})

const data2 = fs.readFileSync("./welcome.txt");
console.log(data2);